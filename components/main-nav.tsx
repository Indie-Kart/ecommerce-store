"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { useEffect, useState } from "react";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  let [isMobile, setIsMobile] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 487);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {" "}
      <nav className={`mx-6 flex items-center space-x-4 lg:space-x-6 `}>
        {!isMobile &&
          routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-black",
                route.active ? "text-black" : "text-neutral-500"
              )}
            >
              {route.label}
            </Link>
          ))}
        {isMobile && (
          <div
            className="fixed top-[25px] left-[7px] h-[55px] flex flex-col gap-[5px] cursor-pointer"
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
          >
            <span className="h-[2px] w-[20px] bg-black"></span>
            <span className="h-[2px] w-[20px] bg-black"></span>
            <span className="h-[2px] w-[20px] bg-black"></span>
          </div>
        )}
      </nav>
      {isOpen && (
        <div className="fixed top-16 h-[160px]  bg-white flex flex-col items-center gap-[10px] w-[100%] z-[99] text-black">
          {routes.map((route) => (
            <a onClick={handleLinkClick}>
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black",
                  route.active ? "text-black" : "text-neutral-500"
                )}
              >
                {route.label}
              </Link>
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default MainNav;
