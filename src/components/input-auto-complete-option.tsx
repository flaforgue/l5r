import type { ReactNode } from "react";

interface InputAutocompleteOptionProps {
  label: string;
  onClick: () => void;
  icon?: ReactNode | undefined;
  isActive?: boolean;
  isFocused?: boolean;
  isDisabled?: boolean;
  className?: string;
}
export function InputAutocompleteOption({
  label,
  onClick,
  icon,
  isActive = false,
  isFocused = false,
  isDisabled = false,
  className = "",
}: InputAutocompleteOptionProps) {
  return (
    <div
      onClick={isDisabled ? undefined : onClick}
      className={`
        inline-flex
        w-full
        items-center
        gap-1.5
        rounded
        px-4
        py-2
        transition-all

        ${isActive
      ? `
        bg-slate-200
        text-slate-900
      `
      : ""}
        ${isFocused ? "bg-slate-100" : ""}
        ${isDisabled
      ? `
        cursor-not-allowed
        bg-white
        text-slate-300
      `
      : `
        cursor-pointer
        text-slate-700
      `}
        ${className}
      `}
    >
      {icon !== undefined && icon}
      {label}
    </div>
  );
}
