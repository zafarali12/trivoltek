import React from "react";
import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  icon,
  className = "",
  style = {},
  ...props
}) {
  const isLink = Boolean(href);
  const Component = motion[isLink ? "a" : "button"];

  const classNames = [
    variant === "primary" ? "btn-primary" : "btn-secondary",
    className,
  ].filter(Boolean).join(" ");

  return (
    <Component
      href={href}
      onClick={onClick}
      className={classNames}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        cursor: "pointer",
        ...style,
      }}
      {...props}
    >
      <span>{children}</span>
      {icon && <span style={{ display: "inline-flex", alignItems: "center" }}>{icon}</span>}
    </Component>
  );
}
