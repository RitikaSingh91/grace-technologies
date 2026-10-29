import Link from 'next/link';
import type { ReactNode } from 'react';
import IconBadge from '@/components/IconBadge/IconBadge';
import Reveal from '@/components/Reveal/Reveal';
import type { IconName } from '@/lib/icons';
import { cx } from '@/lib/cx';
import styles from './InfoCard.module.css';

interface InfoCardProps {
  title: string;
  text?: string;
  number?: string;
  icon?: IconName;
  href?: string;
  children?: ReactNode;
}

/** Bordered content card. With `href` it becomes a link card (no scroll-reveal). */
export default function InfoCard({ title, text, number, icon, href, children }: InfoCardProps) {
  const body = (
    <>
      {icon ? <IconBadge name={icon} className={styles.badge} /> : null}
      {number ? <span className={styles.number}>{number}</span> : null}
      <h3 className={styles.title}>{title}</h3>
      {text ? <p className={styles.text}>{text}</p> : null}
      {children}
    </>
  );

  if (href) {
    return (
      <Link className={cx(styles.card, styles.link)} href={href}>
        {body}
      </Link>
    );
  }
  return <Reveal className={styles.card}>{body}</Reveal>;
}
