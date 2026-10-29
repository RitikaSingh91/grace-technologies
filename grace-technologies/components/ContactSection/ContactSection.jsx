'use client';

import { useState } from 'react';
import { useEnquiry } from '@/components/EnquiryProvider/EnquiryProvider';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const { open } = useEnquiry();
  const [status, setStatus] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus('Please complete all required fields.');
      return;
    }
    setStatus('Please use the enquiry form to submit your project details; online submission is not connected yet.');
  };

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.container}>
        <form className={styles.form} aria-busy="false" noValidate onSubmit={onSubmit}>
          <div className={styles.grid}>
            <div className={styles.field}>
              <label htmlFor="contact-name">Full Name</label>
              <input id="contact-name" name="name" autoComplete="name" maxLength={100} placeholder="Enter your full name" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-phone">Phone Number</label>
              <input id="contact-phone" name="phone" autoComplete="tel" inputMode="tel" maxLength={40} placeholder="+1 (555) 000-0000" required />
            </div>
            <div className={`${styles.field} ${styles.full}`}>
              <label htmlFor="contact-email">Email Address</label>
              <input id="contact-email" name="email" autoComplete="email" maxLength={254} placeholder="you@company.com" required type="email" />
            </div>
            <div className={`${styles.field} ${styles.full}`}>
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" maxLength={5000} placeholder="Tell us about your project or business requirements..." required rows={5} />
            </div>
          </div>
          <div className={styles.footer}>
            <button className={styles.submit} type="submit">Send Message<span aria-hidden="true"> →</span></button>
            <p className={styles.status} aria-live="polite" role="status">{status}</p>
          </div>
          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="contact-website">Leave this field empty</label>
            <input id="contact-website" name="website" autoComplete="off" tabIndex={-1} />
          </div>
        </form>
        <div className={styles.introduction}>
          <p className={styles.eyebrow}>Contact us</p>
          <h2 id="contact-title" className={styles.title}>Let&apos;s Talk About Your Project</h2>
          <p className={styles.text}>Have a business challenge or a technology idea? Tell us what you&apos;re working on. Our team would be glad to learn more and explore how we can help.</p>
          <address className={styles.information}>
            <div><span className={styles.label}>Email</span><a className={styles.email} href="mailto:contact@gracetechnologies.uk">contact@gracetechnologies.uk</a></div>
            <div><span className={styles.label}>Company</span><span>Grace Technologies Ltd.</span></div>
            <div><span className={styles.label}>Location</span><span>Romford, Greater London, United Kingdom</span></div>
          </address>
          <button className={styles.consultation} aria-controls="enquiry-modal" aria-haspopup="dialog" data-enquiry-trigger="true" type="button" onClick={(event) => open('', event.currentTarget)}>Schedule a Consultation</button>
        </div>
      </div>
    </section>
  );
}
