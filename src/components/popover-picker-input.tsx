import { renderToStaticMarkup } from "react-dom/server";
import { Button } from "../shadcn/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcn/ui/popover";
import { CenteredContainer } from "./centered-container";
import { useState, type ReactNode } from "react";

interface PopoverPickerOption {
  value: string;
  label: string;
  description: ReactNode;
  shortDescription?: string;
  illustration: ReactNode;
}

interface PopoverPickerInputProps {
  options: PopoverPickerOption[];
  value: string | null;
  onChange: (value: string | null) => void;
}

export function PopoverPickerInput({
  options,
  value,
  onChange,
}: PopoverPickerInputProps) {
  const [isOpen, setIsOpen] = useState(false);

  const currentOption = options.find((option) => option.value === value);

  return (
    <div
      className={`
        relative
        flex
        flex-col
        items-center
        gap-0.5
      `}
    >
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild data-tooltip-id="global" data-tooltip-html={renderToStaticMarkup(currentOption?.description)}>
          <Button
            variant="outline"
            className={`
              size-9
              p-1.5!
            `}
          >
            {currentOption?.illustration}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-fit">
          <CenteredContainer
            className={`
              flex-wrap
              gap-2
            `}
          >
            {options.map((option) => (
              <Button
                variant={option.value === currentOption?.value ? "default" : "outline"}
                key={option.value}
                className={`
                  size-10
                  p-2!
                `}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                data-tooltip-id="global"
                data-tooltip-html={renderToStaticMarkup(option.description)}
              >
                {option.illustration}
              </Button>
            ))}
          </CenteredContainer>
        </PopoverContent>
      </Popover>
      {currentOption?.shortDescription !== undefined && (
        <p
          className={`
            absolute
            -bottom-4
            text-center
            text-xs
            text-[#5a3e1b]
          `}
        >
          {currentOption.shortDescription}
        </p>
      )}
    </div>
  );
}
