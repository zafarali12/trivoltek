import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Tabs from "../ui/Tabs";
import Badge from "../ui/Badge";
import CardSpotlight from "../ui/CardSpotlight";
import { PROJECTS, PROJECT_CATEGORIES } from "../../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" style={{ padding: "100px 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div style={{ maxWidth: "600px" }}>
              <div className="eyebrow">
                <Sparkles size={15} />
                <span>Selected Portfolio</span>
              </div>
              <h2 className="section-title">
                Products engineered & <br />
                <span className="text-gradient">shipped to production.</span>
              </h2>
              <p className="section-subtitle">
                A showcase of AI engines, SaaS platforms, and enterprise solutions built for
                high performance, scale, and tangible revenue growth.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div>
              <Tabs
                tabs={PROJECT_CATEGORIES}
                activeTab={activeCategory}
                onChange={setActiveCategory}
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "32px",
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "flex" }}
              >
                <CardSpotlight
                  spotlightColor={project.accentGlow}
                  borderColor={project.color}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  {/* Project Image Banner */}
                  <div
                    style={{
                      position: "relative",
                      height: "220px",
                      overflow: "hidden",
                      borderBottom: "1px solid rgba(244, 241, 230, 0.08)",
                    }}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(10, 16, 23, 0.1) 0%, rgba(10, 16, 23, 0.9) 100%)",
                      }}
                    />

                    {/* Top Floating Badges */}
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        right: "16px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Badge variant="obsidian" style={{ background: "rgba(10, 16, 24, 0.85)" }}>
                        {project.tag}
                      </Badge>
                      <div
                        style={{
                          padding: "6px 12px",
                          borderRadius: "var(--radius-full)",
                          background: "rgba(10, 16, 24, 0.9)",
                          backdropFilter: "blur(8px)",
                          border: `1px solid ${project.color}55`,
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: project.color,
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <span>{project.metric}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Body */}
                  <div
                    style={{
                      padding: "26px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      flex: 1,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 800,
                          color: "var(--soft-sand)",
                          letterSpacing: "-0.02em",
                          marginBottom: "10px",
                          lineHeight: 1.3,
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.9375rem",
                          color: "var(--soft-sand-subtle)",
                          lineHeight: "1.6",
                          marginBottom: "20px",
                        }}
                      >
                        {project.desc}
                      </p>
                    </div>

                    <div>
                      {/* Tech Stack Chips */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "6px",
                          marginBottom: "20px",
                        }}
                      >
                        {project.stack.map((tech) => (
                          <span key={tech} className="tag-pill">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Link */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingTop: "16px",
                          borderTop: "1px solid rgba(244, 241, 230, 0.08)",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.8125rem",
                            color: "var(--slate-gray-light)",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {project.metricLabel}
                        </span>
                        <a
                          href={project.link}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            color: "#20B2AA",
                            textDecoration: "none",
                            transition: "color 0.2s ease",
                          }}
                        >
                          <span>Case Study</span>
                          <ArrowUpRight size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
