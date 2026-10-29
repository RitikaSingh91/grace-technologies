'use client';

import { useEnquiry } from '@/components/EnquiryProvider/EnquiryProvider';
import './PartnershipSection.css';

export default function PartnershipSection() {
  const { open } = useEnquiry();

  return (
    <section id="partner" className="sec">
      <div className="wrap two">
        <div className="rv art2">
          <svg viewBox="0 0 480 330" role="img" aria-label="Illustration of two linked organisations collaborating">
            <circle className="ob" cx="170" cy="165" r="110" />
            <circle className="ow ost" cx="310" cy="165" r="110" />
            <path className="oi" d="M240 70a110 110 0 0 1 0 190 110 110 0 0 1 0-190z" opacity=".0" />
            <circle className="oi" cx="240" cy="165" r="38" />
            <path className="ol" d="M226 165l10 10 20-22" />
            <rect className="oi" x="104" y="140" width="84" height="12" rx="6" />
            <rect className="oi" x="104" y="164" width="56" height="10" rx="5" opacity=".7" />
            <rect className="ob" x="304" y="140" width="84" height="12" rx="6" />
            <rect className="os" x="304" y="164" width="56" height="10" rx="5" />
          </svg>
        </div>
        <div className="rv">
          <span className="eyebrow">Our partnership</span>
          <h2>Working with Ank Square Pvt. Ltd.</h2>
          <p>We are building a collaboration with Ank Square Pvt. Ltd. to combine complementary expertise for client requirements. According to its public website, Ank Square works in web development, marketplace and merchant account management, and digital marketing.</p>
          <p>We do not claim Ank Square’s projects, numbers or certifications as our own. Formal details will be added once confirmed.</p>
          <div className="row" style={{ marginTop: '1.4rem' }}>
            <button className="btn pri" type="button" data-enq="Other Enquiry" onClick={(event) => open('Other Enquiry', event.currentTarget)}>Discuss Collaboration</button>
            <a className="btn ghost" href="https://www.anksquare.com/" target="_blank" rel="noopener noreferrer">Visit Ank Square<span className="sr"> (opens in a new tab)</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
