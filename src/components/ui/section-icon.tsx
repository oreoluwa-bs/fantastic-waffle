import { cn } from "~/lib/utils";

interface SectionIconProps {
  children: React.ReactNode;
  className?: HTMLDivElement["className"];
}

export function SectionIcon({ children, className }: SectionIconProps) {
  return (
    <span
      className={cn(
        "section-icon size-10 md:size-12 inline-flex rounded-full items-center justify-center",
        className,
      )}
    >
      {children}
    </span>
  );
}
