import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-normal transition-colors",
  {
    variants: {
      variant: {
        default: "bg-apple-blue/10 text-apple-blue",
        muted: "bg-ink-muted-80/10 text-ink-muted-48",
        "on-dark": "bg-white/10 text-white/60",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export { Badge, badgeVariants };
