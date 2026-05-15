import { CSSProperties, ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "action" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: string;
  iconRight?: string;
  onClick?: () => void;
  className?: string;
}

const BASE: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  border: 0,
  fontWeight: 700,
  fontFamily: "var(--font-body)",
  borderRadius: 999,
  cursor: "pointer",
  whiteSpace: "nowrap",
  transition: "filter 120ms ease, transform 120ms ease",
};

const SIZES: Record<Size, CSSProperties> = {
  sm: { padding: "8px 16px",  fontSize: 13 },
  md: { padding: "11px 22px", fontSize: 14 },
  lg: { padding: "14px 30px", fontSize: 16 },
};

const VARIANTS: Record<Variant, CSSProperties> = {
  primary: { background: "var(--tk-brand-900)", color: "#fff" },
  action:  { background: "var(--tk-green-100)", color: "#fff", boxShadow: "0 6px 18px rgba(7,158,131,0.35)" },
  outline: { background: "transparent", color: "var(--tk-brand-900)", boxShadow: "inset 0 0 0 2px var(--tk-brand-900)" },
  ghost:   { background: "transparent", color: "var(--tk-brand-700)" },
  white:   { background: "#fff", color: "var(--tk-brand-900)" },
};

export function Button({
  children, variant = "primary", size = "md",
  icon, iconRight, onClick,
}: ButtonProps) {
  return (
    <button
      style={{ ...BASE, ...SIZES[size], ...VARIANTS[variant] }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.06)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
    >
      {icon && <Icon name={icon as any} size={16} />}
      {children}
      {iconRight && <Icon name={iconRight as any} size={16} />}
    </button>
  );
}
