import Link from "next/link";

import { cn } from "@/lib/utils";

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/blog"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Blog
      </Link>
      <Link
        href="/blog"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden lg:block"
      >
        Settings
      </Link>
    </nav>
  );
};

export default MainNav;
