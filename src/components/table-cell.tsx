import { cn } from "../shadcn/lib/utils";

interface TableCellProps {
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
}

export function TableCell({
  children,
  className = "",
  colSpan = 1,
}: TableCellProps) {
  return (
    <td
      colSpan={colSpan}
      className={cn(
        `
          px-4
          py-2
        `,
        className,
      )}
    >
      {children}
    </td>
  );
}
