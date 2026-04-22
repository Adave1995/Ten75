"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-zinc-900 text-white hover:bg-zinc-700 active:scale-[0.98] active:-translate-y-[1px]",
  secondary:
    "bg-white text-zinc-900 border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 active:scale-[0.98]",
  ghost:
    "text-zinc-900 hover:text-amber-600 active:scale-[0.98]",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
  showArrow = false,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center gap-2 font-medium tracking-tight rounded-full transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          weight="bold"
          className={`transition-transform duration-200 group-hover:translate-x-0.5 ${
            size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"
          }`}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${baseClasses}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${baseClasses}`}
    >
      {content}
    </button>
  );
}
