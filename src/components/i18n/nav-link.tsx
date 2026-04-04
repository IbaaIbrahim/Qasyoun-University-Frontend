"use client";

import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
};

/** Internal paths use locale-aware `Link`; `#` stays a plain anchor for dropdown parents. */
export default function NavLink({ href, className, children }: Props) {
  if (href === "#") {
    return (
      <a href="#" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
