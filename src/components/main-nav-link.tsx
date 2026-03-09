import type { ReactNode } from "react";
import { Link, useLocation } from "react-router";

interface MainNavLinkProps {
  to: string;
  label: string;
  icon?: ReactNode;
  isDisabled?: boolean;
}
export function MainNavLink({ to, label, icon, isDisabled = false }: MainNavLinkProps) {
  const currentPathname = useLocation().pathname;
  const isActive = currentPathname.includes(to);

  return (
    <Link
      to={isDisabled ? "#" : to}
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

        ${isDisabled && `
          cursor-not-allowed
          opacity-20
        `}
        ${isActive && !isDisabled && "bg-gray-700"}
        ${!isActive && !isDisabled && "hover:bg-gray-50/10"}
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
