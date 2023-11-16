"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiBook } from "react-icons/fi"; // Import the icons you need

const siteRoutes = [
  {
    href: "/",
    label: "Home",
    icon: <FiHome />,
  },
  {
    href: "/posts",
    label: "Posts",
    icon: <FiBook />,
  },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-x-5 text-[14px]">
        {siteRoutes.map((siteRoute) => (
          <li key={siteRoute.href}>
            <Link
              href={siteRoute.href}
              className={`text-zinc-400 transition flex gap-2 justify-center items-center  ${pathname === siteRoute.href ? "text-zinc-900" : ""
                }`}
            >
              {siteRoute.icon}
              {siteRoute.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
