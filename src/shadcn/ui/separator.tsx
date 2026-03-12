import type * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/shadcn/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative: isDecorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={isDecorative}
      orientation={orientation}
      className={cn(
        `
          shrink-0
          bg-olive-300

          data-[orientation=horizontal]:h-px
          data-[orientation=horizontal]:w-full

          data-[orientation=vertical]:h-full
          data-[orientation=vertical]:w-px
        `,
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
