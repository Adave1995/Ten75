interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({
  children,
  light = false,
  className = "",
}: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 ${className}`}
      aria-hidden="true"
    >
      <span
        className={`block w-4 h-px ${light ? "bg-amber-400" : "bg-amber-600"}`}
      />
      <span
        className={`text-xs font-semibold tracking-[0.15em] uppercase ${
          light ? "text-amber-400" : "text-amber-600"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
