"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./style.module.css";
import cn from "clsx";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface INavigation {
  active: boolean;
}

const LINKS = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  {
    id: 3,
    title: <>Pages {<FontAwesomeIcon icon={faChevronDown} />}</>,
    href: "#",
    children: [
      { id: 1, title: "Service", href: "/service" },
      { id: 2, title: "Service single", href: "/service-single" },
      { id: 3, title: "Portfolio", href: "/portfolio" },
      { id: 4, title: "Portfolio single", href: "/portfolio-single" },
      { id: 5, title: "Team", href: "/team" },
      { id: 6, title: "Blog", href: "/blog" },
    ],
  },
  { id: 4, title: "Shop", href: "/shop" },
  { id: 5, title: "Projects", href: "/projects" },
  { id: 6, title: "News", href: "/news" },
];

const Navigation = ({ active }: INavigation) => {
  const [show, setShow] = useState<number | null>(null);
  const showMenu = (id: number) => {
    setShow((prewShow) => (prewShow === id ? null : id));
  };
  const pathname = usePathname();
  return (
    <nav>
      <ul className={cn(styles.nav, active && styles.expand)}>
        {LINKS.map((link) => (
          <li key={link.id} className={styles.nav__li}>
            <Link
              href={link.href}
              className={cn(
                styles.link,
                pathname === link.href && styles.active
              )}
              onClick={() => showMenu(link.id)}
            >
              {link.title}
            </Link>
            {link.children && show === link.id && (
              <ul className={styles.menu}>
                {link.children.map((child) => (
                  <li key={child.id} className={styles.li}>
                    <Link
                      href={child.href}
                      className={cn(
                        styles.link,
                        pathname === child.href && styles.active
                      )}
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
