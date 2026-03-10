import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { InputAutocompleteOption } from "./input-auto-complete-option";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcn/ui/popover";
import TextInput from "./text-input";
import { useKeydownHandler } from "../hooks/use-keydown-handler";

export interface AutocompleteOption {
  value: string;
  label: string;
  isDisabled?: boolean;
  tooltip?: string | null;
  icon?: ReactNode | undefined;
}

interface InputAutocompleteProps {
  options: AutocompleteOption[];
  onChange: (value: string | null) => void;
  value?: string | null;
  onResetValue?: () => void;
  placeholder?: string;
  label?: string | undefined;
  inputClassName?: string;
}

export default function InputAutocomplete({
  options,
  onChange,
  onResetValue,
  value,
  label,
  placeholder,
  inputClassName = "",
}: InputAutocompleteProps) {
  const [searchValue, setSearchValue] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const closeDropdown = () => {
    setIsPopoverOpen(false);
  };

  useEffect(() => {
    if (value === "" || value === undefined || value === null) {
      setSearchValue("");

      return;
    }

    const activeOption = options.find((option) => option.value === value);
    if (activeOption !== undefined) {
      setSearchValue(activeOption.label);
    }
  }, [options, value]);

  const resetValueAndCloseDropdown = () => {
    closeDropdown();
    setSearchValue("");
    onResetValue?.();
  };

  const updateSearchResults = (search: string) => {
    onChange(null);
    setSearchValue(search);
    if (search === "") {
      resetValueAndCloseDropdown();
    } else {
      setIsPopoverOpen(true);
    }
  };

  const selectOption = (option: AutocompleteOption) => {
    onChange(option.value);
    closeDropdown();
    setSearchValue(option.label);
  };

  const [focusedIndex, setFocusedIndex] = useState(-1);
  useKeydownHandler("Escape", (e: KeyboardEvent) => {
    e.preventDefault();
    resetValueAndCloseDropdown();
  });
  useKeydownHandler("ArrowUp", (e: KeyboardEvent) => {
    e.preventDefault();
    if (focusedIndex > 0) {
      setFocusedIndex(focusedIndex - 1);
    } else {
      setFocusedIndex(options.length - 1);
    }
  });
  useKeydownHandler("ArrowDown", (e: KeyboardEvent) => {
    e.preventDefault();
    if (focusedIndex < options.length - 1) {
      setFocusedIndex(focusedIndex + 1);
    } else {
      setFocusedIndex(0);
    }
  });
  useKeydownHandler("Enter", (e: KeyboardEvent) => {
    e.preventDefault();
    const option = options[focusedIndex];
    if (option !== undefined && option.isDisabled !== true) {
      selectOption(option);
    }
  });

  const filteredOptions = searchValue === ""
    ? []
    : options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase())).slice(0, 5);

  return (
    <Popover open={isPopoverOpen && filteredOptions.length > 0}>

      <PopoverTrigger asChild>
        <div>
          <TextInput
            label={label}
            value={searchValue}
            onChange={updateSearchResults}
            placeholder={placeholder}
            className={inputClassName}
          />
        </div>
      </PopoverTrigger>

      <PopoverContent
        onOpenAutoFocus={(e) => {
          e.preventDefault();
        }}
        className={`
          space-y-1
          p-2
        `}
      >
        {filteredOptions.map((option, index) => {
          return (
            <div
              key={option.value}
              onMouseEnter={() => {
                setFocusedIndex(index);
              }}
              data-tooltip-id="global"
              data-tooltip-content={option.tooltip ?? null}
              data-tooltip-place="left"
            >
              <InputAutocompleteOption
                isActive={option.value === value}
                isFocused={index === focusedIndex}
                isDisabled={option.isDisabled ?? false}
                label={option.label}
                icon={option.icon}
                onClick={() => {
                  selectOption(option);
                }}
              />
            </div>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
