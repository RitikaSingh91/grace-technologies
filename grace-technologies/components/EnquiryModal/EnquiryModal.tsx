'use client';

import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';
import styles from './EnquiryModal.module.css';

interface EnquiryModalProps {
  open: boolean;
  service: string;
  onClose: () => void;
}

interface Values {
  name: string;
  tel: string;
  email: string;
  svc: string;
}

type Errors = Partial<Record<'name' | 'tel' | 'email' | 'svc', string>>;

const EMPTY: Values = { name: '', tel: '', email: '', svc: '' };

export default function EnquiryModal({ open, service, onClose }: EnquiryModalProps) {
  const uid = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  // Preselect the service and focus the first field when opened.
  useEffect(() => {
    if (!open) return;
    if (service) setValues((v) => ({ ...v, svc: service }));
    document.body.style.overflow = 'hidden';
    nameRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, service]);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  // Escape closes the dialog and Tab stays inside it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button,input,select,textarea')).filter(
        (x) => x.offsetParent !== null && !(x as HTMLButtonElement).disabled,
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const set =
    (key: keyof Values) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tel = values.tel.replace(/[\s\-().]/g, '');
    const next: Errors = {
      name: values.name.trim().length > 1 ? '' : 'Enter your name.',
      tel: /^\+?\d{7,15}$/.test(tel) ? '' : 'Enter a valid phone number, with country code if outside the UK.',
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) ? '' : 'Enter a valid email address.',
      svc: values.svc ? '' : 'Choose a service.',
    };
    setErrors(next);
    if (Object.values(next).some(Boolean)) {
      setStatus('Please fix the highlighted fields.');
      return;
    }
    setSending(true);
    setStatus('');
    timer.current = setTimeout(() => {
      setSending(false);
      setStatus('Preview only: your details passed validation but were not sent, because no submission endpoint is connected yet.');
    }, 800);
  };

  const titleId = `${uid}-title`;

  return (
    <div className={styles.modal} hidden={!open} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby={titleId} ref={dialogRef}>
        <button className={styles.close} type="button" aria-label="Close dialog" onClick={onClose}>
          <Icon name="Close" />
        </button>
        <h2 id={titleId} className={styles.title}>
          Let&apos;s Talk
        </h2>
        <p className={styles.intro}>Tell us a little and we will get back to you.</p>
        <form className={styles.form} noValidate onSubmit={onSubmit}>
          <label className={styles.field}>
            Full Name
            <input
              className={styles.input}
              ref={nameRef}
              autoComplete="name"
              value={values.name}
              onChange={set('name')}
              aria-invalid={!!errors.name}
              aria-describedby={`${uid}-en`}
            />
            <span className={styles.error} id={`${uid}-en`}>
              {errors.name}
            </span>
          </label>
          <label className={styles.field}>
            Phone
            <input
              className={styles.input}
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+1 (555) 000-0000"
              value={values.tel}
              onChange={set('tel')}
              aria-invalid={!!errors.tel}
              aria-describedby={`${uid}-ep`}
            />
            <span className={styles.error} id={`${uid}-ep`}>
              {errors.tel}
            </span>
          </label>
          <label className={styles.field}>
            Email
            <input
              className={styles.input}
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={values.email}
              onChange={set('email')}
              aria-invalid={!!errors.email}
              aria-describedby={`${uid}-ee`}
            />
            <span className={styles.error} id={`${uid}-ee`}>
              {errors.email}
            </span>
          </label>
          <label className={styles.field}>
            Service of Interest
            <select className={styles.input} value={values.svc} onChange={set('svc')} required>
              <option value="" disabled>Choose a service</option>
              <option>Web &amp; Mobile App Development</option>
              <option>Merchant Account Management</option>
              <option>Agentic AI &amp; Workflow Automation</option>
              <option>Digital Marketing</option>
              <option>Other</option>
            </select>
            <span className={styles.error}>{errors.svc}</span>
          </label>
          <Button type="submit" disabled={sending}>
            {sending ? 'Sending…' : 'Submit Enquiry'}
          </Button>
          <p className={styles.status} role="status">
            {status}
          </p>
        </form>
      </div>
    </div>
  );
}
