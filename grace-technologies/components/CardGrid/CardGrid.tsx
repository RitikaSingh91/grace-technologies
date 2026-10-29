import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';
import styles from './CardGrid.module.css';

interface CardGridProps {
  columns?: 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}

export default function CardGrid({ columns = 3, children, className }: CardGridProps) {
  return <div className={cx(styles.grid, styles[`cols${columns}`], className)}>{children}</div>;
}
