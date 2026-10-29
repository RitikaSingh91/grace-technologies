'use client';

import { createElement, useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';
import { cx } from '@/lib/cx';
import styles from './Reveal.module.css';

interface RevealProps {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}

/**
 * Fades its element in when it scrolls into view. Content is fully visible on the server
 * and without JavaScript; only elements that start below the fold are armed on the client.
 */
export default function Reveal({ as = 'div', className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<'idle' | 'armed' | 'shown'>('idle');

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    setState('armed');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('shown');
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const props: Record<string, unknown> = {
    ref,
    className: cx(styles.reveal, state === 'armed' && styles.armed, state === 'shown' && styles.shown, className),
  };
  return createElement(as, props, children);
}
