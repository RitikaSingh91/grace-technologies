'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useState } from 'react';
import Container from '@/components/Container/Container';
import EnquireButton from '@/components/EnquireButton/EnquireButton';
import Logo from '@/components/Logo/Logo';
import { NAV_ITEMS, navHref } from '@/data/site';
import { cx } from '@/lib/cx';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const navId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  // Highlight the current section on the home page, or "services" on a service page.
  useEffect(() => {
    if (pathname !== '/') {
      setActive(pathname.startsWith('/services/') ? 'services' : '');
      return;
    }
    setActive('home');
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -55% 0px' },
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  // Close the mobile menu when the route changes.
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <Link className={styles.logoLink} href="/" aria-label="Grace Technologies home" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>
        <nav id={navId} className={cx(styles.nav, menuOpen && styles.open)} aria-label="Primary">
          {NAV_ITEMS.map(({ id, label }) => (
            <Link
              key={id}
              className={styles.link}
              href={navHref(id)}
              aria-current={active === id ? 'true' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className={styles.mobileCta}>
            <EnquireButton>Enquire Now</EnquireButton>
          </div>
        </nav>
        <div className={styles.cta}>
          <EnquireButton size="compact">Enquire Now</EnquireButton>
        </div>
        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls={navId}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
        </button>
      </Container>
    </header>
  );
}
