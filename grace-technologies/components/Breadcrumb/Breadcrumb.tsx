import Link from 'next/link';
import { Fragment } from 'react';
import styles from './Breadcrumb.module.css';

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className={styles.crumb} aria-label="Breadcrumb">
      {items.map((item, i) => (
        <Fragment key={item.label}>
          {i > 0 ? ' / ' : null}
          {item.href ? <Link className={styles.link} href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </Fragment>
      ))}
    </nav>
  );
}
