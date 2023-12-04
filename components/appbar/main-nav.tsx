"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { useState } from "react";

export const navBarContent = [
  {
    title: "Overview",
    href: "/",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Setting",
    href: "/setting",
  },
];

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const [activePage, setActivePage] = useState(0);

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {navBarContent.map((prop, index) => (
        <Link
          key={index}
          href={prop.href}
          onClick={() => setActivePage(index)}
          className={`text-sm font-medium transition-colors ${
            activePage === index ? "" : "text-muted-foreground"
          } hover:text-primary`}
        >
          {prop.title}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
