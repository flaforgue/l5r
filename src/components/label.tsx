interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

export function Label({ htmlFor, children, className = "" }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`
        block
        font-title
        text-xs
        text-[#9e8060]
        uppercase

        ${className}
      `}
    >
      {children}
    </label>
  );
}
