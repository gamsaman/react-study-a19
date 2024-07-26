"use client";
import styles from "./navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          {path === "/" ? (
            <Link href="/" className={styles.onLink}>
              Home
            </Link>
          ) : (
            <Link href="/">Home</Link>
          )}
        </li>
        <li>
          {path === "/about" ? (
            <Link href="/about" className={styles.onLink}>
              About
            </Link>
          ) : (
            <Link href="/about">About</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
