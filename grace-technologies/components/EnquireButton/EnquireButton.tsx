'use client';

import type { ReactNode } from 'react';
import Button from '@/components/Button/Button';
import { useEnquiry } from '@/components/EnquiryProvider/EnquiryProvider';

interface EnquireButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'ghost';
  size?: 'md' | 'sm' | 'compact';
  service?: string;
  className?: string;
}

/** Opens the enquiry dialog, optionally with a service preselected. */
export default function EnquireButton({ children = 'Enquire Now', variant = 'primary', size = 'md', service = '', className }: EnquireButtonProps) {
  const { open } = useEnquiry();
  return (
    <Button variant={variant} size={size} className={className} onClick={(e) => open(service, e.currentTarget)}>
      {children}
    </Button>
  );
}
