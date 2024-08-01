"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  name: string;
  path: string;
}

const links: LinkProps[] = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link: LinkProps, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={cn(
              "capitalize font-medium hover:text-accent transition-all",
              link.path === pathname && "text-accent border-b-2 border-accent"
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
