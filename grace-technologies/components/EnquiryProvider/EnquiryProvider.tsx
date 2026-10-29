'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import EnquiryModal from '@/components/EnquiryModal/EnquiryModal';

interface EnquiryContextValue {
  open: (service?: string, trigger?: HTMLElement | null) => void;
}

const EnquiryContext = createContext<EnquiryContextValue>({ open: () => {} });

export const useEnquiry = (): EnquiryContextValue => useContext(EnquiryContext);

export default function EnquiryProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({ open: false, service: '' });
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setState({ open: true, service: '' });
  }, []);

  const open = useCallback((service?: string, trigger?: HTMLElement | null) => {
    triggerRef.current = trigger ?? null;
    setState({ open: true, service: service ?? '' });
  }, []);

  const close = useCallback(() => {
    setState((s) => ({ ...s, open: false }));
    const trigger = triggerRef.current;
    if (trigger && document.contains(trigger)) trigger.focus();
  }, []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <EnquiryModal open={state.open} service={state.service} onClose={close} />
    </EnquiryContext.Provider>
  );
}
