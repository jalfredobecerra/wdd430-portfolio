'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition-colors hover:text-blue-200 ${
      pathname === path ? 'font-bold underline underline-offset-4' : ''
    }`;

  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <Link href="/" aria-current={pathname === '/' ? 'page' : undefined} className={linkClass('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined} className={linkClass('/about')}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" aria-current={pathname === '/contact' ? 'page' : undefined} className={linkClass('/contact')}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}