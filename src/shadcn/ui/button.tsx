import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/shadcn/lib/utils";

// eslint-disable-next-line @typescript-eslint/naming-convention
const buttonVariants = cva(
  `
    inline-flex
    shrink-0
    items-center
    justify-center
    gap-2
    rounded
    text-sm
    font-medium
    whitespace-nowrap
    transition-all
    outline-none

    focus-visible:border-ring
    focus-visible:ring-[3px]
    focus-visible:ring-ring/50

    disabled:pointer-events-none
    disabled:opacity-50

    aria-invalid:border-destructive
    aria-invalid:ring-destructive/20

    [&_svg]:shrink-0

    [&_svg:not([class*='size-'])]:size-4
  `,
  {
    variants: {
      variant: {
        default: `
          border
          border-[#c8a06a]
          bg-[#f5ede0]

          hover:bg-[#eddfc8]
        `,
        destructive:
          `
            bg-destructive
            text-white

            hover:bg-destructive/90

            focus-visible:ring-destructive/20
          `,
        outline:
          `
            border
            border-[#c8a06a]
            bg-white
            shadow-xs

            hover:bg-[#f5ede0]
            hover:text-accent-foreground
          `,
        secondary:
          `
            bg-secondary
            text-secondary-foreground

            hover:bg-secondary/80
          `,
        ghost:
          `
            border
            border-olive-400
            text-olive-600

            hover:bg-olive-100
          `,
        link: `
          text-primary
          underline-offset-4

          hover:underline
        `,
      },
      size: {
        "default": `
          h-9
          px-4
          py-2

          has-[>svg]:px-3
        `,
        "xs": `
          h-6
          gap-1
          rounded
          px-2
          text-xs

          has-[>svg]:px-1.5

          [&_svg:not([class*='size-'])]:size-3
        `,
        "sm": `
          h-8
          gap-1.5
          rounded
          px-3

          has-[>svg]:px-2.5
        `,
        "lg": `
          h-10
          rounded
          px-6

          has-[>svg]:px-4
        `,
        "icon": "size-9",
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "icon-xs": `
          size-6
          rounded

          [&_svg:not([class*='size-'])]:size-3
        `,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "icon-sm": "size-8",
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  asChild = false,
  ...props
}: React.ComponentProps<"button">
  & VariantProps<typeof buttonVariants> & {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    asChild?: boolean;
  }) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
