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
  if (href === "#" || href.startsWith("http://") || href.startsWith("https://")) {
    return (
      <a
        href={href}
        className={className}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
      >
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
