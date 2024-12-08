import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import * as React from "react";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex relative group items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "primary-button",
        tertiary: "bg-tertiary text-tertiary-foreground hover:bg-tertiary/80",
      },
      size: {
        default: "h-10 px-4 py-1.5",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        <span className="absolute flex top-0 left-0 right-0 justify-between opacity-0 group-hover:opacity-100 pointer-events-none transition-500">
          <Image
            src="/twinkles.webp"
            alt=""
            width={62}
            height={62}
            className="w-[3.9rem] h-[3.9rem]"
            loading="lazy"
            unoptimized
          />
          <Image
            src="/twinkles.webp"
            alt=""
            width={62}
            height={62}
            className="w-[3.9rem] h-[3.9rem] rotate-[90deg]"
            loading="lazy"
            unoptimized
          />
          <Image
            src="/twinkles.webp"
            alt=""
            width={62}
            height={62}
            className="w-[3.9rem] h-[3.9rem] rotate-[180deg]"
            loading="lazy"
            unoptimized
          />
        </span>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
