import Icon from '@/components/Icon/Icon';
import { cx } from '@/lib/cx';
import styles from './CheckList.module.css';

interface CheckListProps {
  items: string[];
  size?: 'md' | 'sm';
  className?: string;
}

export default function CheckList({ items, size = 'md', className }: CheckListProps) {
  return (
    <ul className={cx(styles.list, size === 'sm' && styles.small, className)}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          <Icon name="Check" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
