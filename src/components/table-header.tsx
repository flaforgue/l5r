import { cn } from "../shadcn/lib/utils";

interface TableProps {
  children?: React.ReactNode;
  className?: string;
}

export function TableHeader({
  children,
  className = "",
}: TableProps) {
  return (
    <th
      className={cn(
        `
          border-b
          border-[#c8a06a]
          bg-[#f5ede0]/90
          px-3
          py-2
          text-left
          font-title
        `,
        className,
      )}
    >
      {children}
    </th>
  );
}
