import type { ReactNode } from "react";
import { Link, useLocation } from "react-router";

interface MainNavLinkProps {
  to: string;
  label: string;
  icon?: ReactNode;
}
export function MainNavLink({ to, label, icon }: MainNavLinkProps) {
  const currentPathname = useLocation().pathname;
  const isActive = currentPathname.includes(to);

  return (
    <Link
      to={to}
      data-tooltip-id="global"
      data-tooltip-content={label}
      data-tooltip-place="right"
      className={`
        flex
        aspect-square
        w-full
        items-center
        justify-center
        rounded-lg
        text-white
        transition-all
        ease-in-out

        ${isActive
      ? "bg-gray-700"
      : "hover:bg-gray-50/10"
    }
      `}
    >
      <div
        className={`
          flex
          h-8
          items-center
        `}
      >
        {icon}
      </div>
    </Link>
  );
}
