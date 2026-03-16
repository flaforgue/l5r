import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
interface OverflowAwareContainerProps {
  children: ReactNode;
  gradientFromClassName?: string;
  className?: string;
};

export function OverflowAwareContainer({
  children,
  gradientFromClassName = "from-olive-500/60",
  className = "",
}: OverflowAwareContainerProps) {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const [hasOverflowTop, setHasOverflowTop] = useState(false);
  const [hasOverflowRight, setHasOverflowRight] = useState(false);
  const [hasOverflowBottom, setHasOverflowBottom] = useState(false);
  const [hasOverflowLeft, setHasOverflowLeft] = useState(false);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (container === null) {
      return;
    }

    const { scrollLeft, scrollTop, scrollWidth, scrollHeight, clientWidth, clientHeight } = container;
    setHasOverflowTop(scrollTop > 0 && scrollHeight > clientHeight);
    setHasOverflowRight(scrollLeft < scrollWidth - clientWidth - 1);
    setHasOverflowBottom(scrollTop < scrollHeight - clientHeight - 1);
    setHasOverflowLeft(scrollLeft > 0 && scrollWidth > clientWidth);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container === null) {
      return;
    }

    handleScroll();
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => handleScroll, [children, handleScroll]);

  return (
    <div
      className={`
        relative
        max-h-full
        max-w-full
      `}
    >
      <div
        ref={containerRef}
        className={`
          max-h-full
          max-w-full
          overflow-scroll

          ${className}
        `}
      >
        {children}
      </div>

      <div
        className={`
          pointer-events-none
          absolute
          top-0
          left-0
          z-10
          h-10
          w-full
          bg-linear-to-b
          to-transparent
          transition-opacity

          ${hasOverflowTop ? "opacity-100" : "opacity-0"}
          ${gradientFromClassName}
        `}
      />

      <div
        className={`
          pointer-events-none
          absolute
          top-0
          left-0
          z-10
          h-full
          w-10
          bg-linear-to-r
          to-transparent
          transition-opacity

          ${hasOverflowLeft ? "opacity-100" : "opacity-0"}
          ${gradientFromClassName}
        `}
      />

      <div
        className={`
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-10
          h-10
          w-full
          bg-linear-to-t
          to-transparent

          ${hasOverflowBottom ? "opacity-100" : "opacity-0"}
          ${gradientFromClassName}
        `}
      />

      <div
        className={`
          pointer-events-none
          absolute
          top-0
          right-0
          z-10
          h-full
          w-10
          bg-linear-to-l
          to-transparent
          transition-opacity

          ${hasOverflowRight ? "opacity-100" : "opacity-0"}
          ${gradientFromClassName}
        `}
      />
    </div>
  );
}
