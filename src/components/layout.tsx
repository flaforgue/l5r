import type { ReactNode } from "react";
import { Link, Outlet, ScrollRestoration } from "react-router";
import { RingsImage } from "./images/rings-image";
import { CenteredContainer } from "./centered-container";
import { SamuraiImage } from "./images/samurai-image";
import { MainNavLink } from "./main-nav-link";
import { FanImage } from "./images/fan-image";
import { BackpackImage } from "./images/backpack-image";

interface LayoutProps {
  children?: ReactNode | ReactNode[];
}

export function Layout({ children }: LayoutProps) {
  return (
    <section className="min-w-screen">
      <ScrollRestoration />

      <div
        className={`
          fixed
          z-10
          h-screen
          w-16
          bg-gray-950
        `}
      >
        <div
          className={`
            h-28
            text-gray-50
          `}
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}/images/banner.png)`,
            backgroundSize: "contain",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className={`
              relative
              top-8
              block
              h-8
            `}
          >
            <Link to="/player/home">
              <RingsImage />
            </Link>
          </div>
        </div>
        <CenteredContainer
          className={`
            h-[calc(100vh-var(--spacing)*28)]
            flex-col
            gap-4
            px-2
          `}
        >
          <MainNavLink to="/player/character" label="Personnage" icon={<SamuraiImage />} />
          <MainNavLink to="/player/inventory" label="Inventaire" icon={<BackpackImage />} />
          <MainNavLink to="/player/interlude" label="Interlude" icon={<FanImage />} />
          {/* <MainNavLink
            isDisabled={true}
            to="/player/notes"
            label="Notes"
            icon={<ScrollImage />}
          /> */}
        </CenteredContainer>
      </div>
      <div
        className={`
          ml-16
          min-h-screen
          w-[calc(100vw-var(--spacing)*16)]
          bg-cover
          bg-fixed
          bg-no-repeat
          px-8
          py-4
        `}
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}/images/background.jpg)`,
        }}
      >
        <Outlet />
        {children}
      </div>
    </section>
  );
}
