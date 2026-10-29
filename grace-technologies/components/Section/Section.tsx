import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';
import styles from './Section.module.css';

interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: 'plain' | 'alt';
  labelledBy?: string;
  className?: string;
}

export default function Section({ children, id, tone = 'plain', labelledBy, className }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cx(styles.section, tone === 'alt' && styles.alt, className)}>
      {children}
    </section>
  );
}
