import { ICON_PATHS, type IconName } from '@/lib/icons';
import { cx } from '@/lib/cx';
import styles from './Icon.module.css';

interface IconProps {
  name: IconName;
  className?: string;
}

/** Decorative inline icon. Size follows the surrounding font size unless a parent overrides it. */
export default function Icon({ name, className }: IconProps) {
  return (
    <svg className={cx(styles.icon, className)} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}
