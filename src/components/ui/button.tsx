import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 neon-glow-primary hover:neon-glow-primary",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 neon-glow-secondary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        casino: "bg-gradient-to-r from-primary to-secondary text-white font-bold uppercase tracking-wider hover:from-secondary hover:to-primary neon-glow-primary hover:scale-105 transition-all duration-300",
        neon: "bg-accent text-accent-foreground neon-glow-accent hover:bg-accent/90 animate-glow-pulse",
        gold: "bg-gold text-gold-foreground hover:bg-gold/90 font-bold uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300",
        shuffle: "bg-purple text-purple-foreground hover:bg-purple/90 font-bold animate-float neon-glow-accent hover:animate-slot-spin",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-9 rounded-md px-3",
        lg: "h-16 rounded-lg px-10 text-lg",
        xl: "h-20 rounded-xl px-12 text-xl font-bold",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
