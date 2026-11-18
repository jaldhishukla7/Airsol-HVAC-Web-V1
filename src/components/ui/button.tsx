import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * shadcn/ui-style button. `primary` is the only place safety orange is used,
 * with navy text for AA contrast.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-[background-color,color,border-color,transform] duration-150 disabled:pointer-events-none disabled:opacity-60 active:translate-y-px [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-orange text-navy hover:bg-orange-600 shadow-[inset_0_-2px_0_rgb(0_0_0/0.12)]",
        secondary: "bg-navy text-white hover:bg-steel",
        outline: "border border-steel/40 bg-white text-navy hover:border-steel hover:bg-ice",
        ghostDark: "border border-white/30 text-white hover:border-cyan hover:bg-white/5",
        link: "px-0 text-steel underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-[15px]",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
