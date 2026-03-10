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
          border-collapse
          overflow-hidden
          rounded
          text-sm
          text-[#3a2410]

          [&_tbody_tr:nth-child(even)]:bg-white/90
          [&_tbody_tr:nth-child(odd)]:bg-olive-300/90
        `,
        className,
      )}
    >
      {children}
    </table>
  );
}
