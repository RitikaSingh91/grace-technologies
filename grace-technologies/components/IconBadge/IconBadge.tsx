import Icon from '@/components/Icon/Icon';
import type { IconName } from '@/lib/icons';
import { cx } from '@/lib/cx';
import styles from './IconBadge.module.css';

interface IconBadgeProps {
  name: IconName;
  size?: 'lg' | 'md' | 'check';
  className?: string;
}

/** Gradient tile (or circle) that holds an icon. */
export default function IconBadge({ name, size = 'lg', className }: IconBadgeProps) {
  return (
    <span className={cx(styles.badge, styles[size], className)}>
      <Icon name={name} />
    </span>
  );
}
