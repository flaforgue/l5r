import { cn } from "../shadcn/lib/utils";

interface CheckboxInputProps {
  isChecked: boolean;
  onChange: (v: boolean) => void;
  className?: string;
}
export default function CheckboxInput({ isChecked, onChange, className = "" }: CheckboxInputProps) {
  const toggle = () => {
    onChange(!isChecked);
  };

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={toggle}
      className={cn(
        `
          h-7
          max-h-7
          min-h-7
          w-7
          max-w-7
          min-w-7
          cursor-pointer
          appearance-none
          rounded-full
          border-2
          border-olive-500
          bg-size-[0.55em_0.55em]
          bg-center
          bg-no-repeat
          align-middle
          text-green-500
          transition-colors
          duration-75
          ease-in

          checked:border-green-700
          checked:bg-current
        `,
        className,
      )}
    />
  );
}
