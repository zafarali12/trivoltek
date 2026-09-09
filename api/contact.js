import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // CORS headers — must be set before any response
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json");

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, service, budget, message, phone } = req.body;

  // Server-side validation
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({ error: "Valid name is required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: "Valid email address is required." });
  }

  if (!message || typeof message !== "string" || message.trim().length < 10) {
    return res.status(400).json({ error: "Message must be at least 10 characters." });
  }

  // Sanitize inputs to prevent injection
  const sanitize = (val) => (typeof val === "string" ? val.replace(/</g, "&lt;").replace(/>/g, "&gt;") : "");

  const safeData = {
    name: sanitize(name).trim(),
    email: sanitize(email).trim(),
    company: sanitize(company || "Not provided").trim(),
    service: sanitize(service || "Not specified").trim(),
    budget: sanitize(budget || "Not specified").trim(),
    message: sanitize(message).trim(),
    phone: sanitize(phone || "Not provided").trim(),
  };

  try {
    const { data, error } = await resend.emails.send({
      from: "TRIVOLTEK Contact <onboarding@resend.dev>",
      to: ["zafaraliimran12@gmail.com"],
      replyTo: safeData.email,
      subject: `🚀 New Project Inquiry from ${safeData.name}${safeData.company !== "Not provided" ? ` — ${safeData.company}` : ""}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: 'Segoe UI', sans-serif; background: #06162a; color: #f4f1e6; margin: 0; padding: 0; }
              .wrapper { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
              .header { background: linear-gradient(135deg, #1c2b3f, #0b1720); border: 1px solid rgba(32,178,170,0.35); border-radius: 12px; padding: 32px; text-align: center; margin-bottom: 24px; }
              .header h1 { color: #20B2AA; font-size: 28px; margin: 0 0 8px; letter-spacing: -0.03em; }
              .header p { color: rgba(244,241,230,0.6); font-size: 14px; margin: 0; }
              .card { background: #1c2b3f; border: 1px solid rgba(244,241,230,0.08); border-radius: 12px; padding: 28px; margin-bottom: 16px; }
              .card h2 { color: #20B2AA; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 16px; }
              .field { margin-bottom: 14px; }
              .field-label { font-size: 11px; color: rgba(244,241,230,0.45); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; }
              .field-value { font-size: 15px; color: #f4f1e6; font-weight: 500; }
              .message-box { background: rgba(6,22,42,0.6); border: 1px solid rgba(32,178,170,0.2); border-radius: 8px; padding: 16px; margin-top: 8px; }
              .message-box p { margin: 0; font-size: 14px; line-height: 1.65; color: rgba(244,241,230,0.8); }
              .badge { display: inline-block; padding: 4px 12px; background: rgba(32,178,170,0.15); border: 1px solid rgba(32,178,170,0.4); border-radius: 100px; color: #79F6ED; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; }
              .footer { text-align: center; padding-top: 24px; color: rgba(244,241,230,0.35); font-size: 12px; }
              a { color: #20B2AA; }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="header">
                <h1>🚀 New Project Inquiry</h1>
                <p>Received via trivoltek.vercel.app — ${new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" })} PKT</p>
              </div>

              <div class="card">
                <h2>Client Details</h2>
                <div class="field">
                  <div class="field-label">Full Name</div>
                  <div class="field-value">${safeData.name}</div>
                </div>
                <div class="field">
                  <div class="field-label">Email Address</div>
                  <div class="field-value"><a href="mailto:${safeData.email}">${safeData.email}</a></div>
                </div>
                <div class="field">
                  <div class="field-label">Phone</div>
                  <div class="field-value">${safeData.phone}</div>
                </div>
                <div class="field">
                  <div class="field-label">Company / Product</div>
                  <div class="field-value">${safeData.company}</div>
                </div>
              </div>

              <div class="card">
                <h2>Project Scope</h2>
                <div class="field">
                  <div class="field-label">Service Requested</div>
                  <div class="field-value"><span class="badge">${safeData.service}</span></div>
                </div>
                <div class="field">
                  <div class="field-label">Estimated Budget</div>
                  <div class="field-value">${safeData.budget}</div>
                </div>
                <div class="field">
                  <div class="field-label">Project Details</div>
                  <div class="message-box"><p>${safeData.message.replace(/\n/g, "<br/>")}</p></div>
                </div>
              </div>

              <div class="footer">
                <p>This inquiry was submitted from <a href="https://trivoltek.vercel.app">trivoltek.vercel.app</a></p>
                <p style="margin-top:8px;">Reply directly to this email to respond to ${safeData.name}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send email. Please try again." });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Internal server error. Please try again later." });
  }
}
