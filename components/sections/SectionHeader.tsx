"use client";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  const alignmentClasses =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  return (
    <div className={`${alignmentClasses} mb-10 sm:mb-12 ${className ?? ""}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto ${align === 'left' ? 'ml-0' : ''}">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
