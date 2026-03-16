import { cn } from "../shadcn/lib/utils";

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export function Table({
  children,
  className = "",
}: TableProps) {
  return (
    <table
      className={cn(
        `
          w-full
          border-separate
          border-spacing-0
          text-sm
          text-[#3a2410]
          transition-colors

          **:border-[#e3cfb5]

          [&_tbody_tr:hover]:bg-olive-100/90

          [&_tr]:bg-olive-50/80

          [&_tr_td]:border-t

          [&_tr_td:first-child]:border-l
          [&_tr_td:last-child]:border-r

          [&_tr_th:first-child]:border-l
          [&_tr_th:last-child]:border-r

          [&_tr:first-child_th]:border-t
          [&_tr:first-child_th:first-child]:rounded-tl
          [&_tr:first-child_th:last-child]:rounded-tr
          [&_tr:last-child_td]:border-b
          [&_tr:last-child_td:first-child]:rounded-bl
          [&_tr:last-child_td:last-child]:rounded-br
        `,
        className,
      )}
    >
      {children}
    </table>
  );
}
