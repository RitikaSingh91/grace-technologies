import Link from 'next/link';
import type { MouseEventHandler, ReactNode } from 'react';
import { cx } from '@/lib/cx';
import styles from './Button.module.css';

interface BaseProps {
  variant?: 'primary' | 'ghost';
  size?: 'md' | 'sm' | 'compact';
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}

interface LinkProps extends BaseProps {
  href: string;
}

interface ActionProps extends BaseProps {
  href?: undefined;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type ButtonProps = LinkProps | ActionProps;

/** One button for the whole site: internal link, external/mailto link, or real <button>. */
export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, ariaLabel, children } = props;
  const classes = cx(styles.button, styles[variant], size !== 'md' && styles[size], className);

  if (props.href !== undefined) {
    const { href } = props;
    if (href.startsWith('/')) {
      return (
        <Link className={classes} href={href} aria-label={ariaLabel}>
          {children}
        </Link>
      );
    }
    return (
      <a className={classes} href={href} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={props.type ?? 'button'} disabled={props.disabled} aria-label={ariaLabel} onClick={props.onClick}>
      {children}
    </button>
  );
}
