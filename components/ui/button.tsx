import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-[17px] font-normal transition-all duration-150 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 apple-press",
  {
    variants: {
      variant: {
        default: "bg-apple-blue text-white rounded-full",
        outline: "rounded-full border border-apple-blue text-apple-blue",
        ghost: "text-apple-blue rounded-full",
        "dark-utility": "bg-ink text-white rounded-[8px] text-[14px]",
        "pearl-capsule": "bg-surface-pearl text-ink-muted-48 rounded-[11px] text-[14px]",
      },
      size: {
        default: "h-[38px] px-5 py-2",
        sm: "h-[30px] px-3.5 py-1 text-[12px]",
        lg: "h-[44px] px-6 py-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
