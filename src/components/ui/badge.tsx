import { cn } from "~/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  s?: string; // type quick fix
}

function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "bg-background text-foreground inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
