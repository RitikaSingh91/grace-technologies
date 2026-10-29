'use client';

import { useEnquiry } from '@/components/EnquiryProvider/EnquiryProvider';
import './PartnershipSection.css';

export default function PartnershipSection() {
  const { open } = useEnquiry();

  return (
    <section id="partner" className="sec">
      <div className="wrap two">
        <div className="rv art2" aria-label="Grace Technologies and Ank Square partnership">
          <div className="partnerCircles">
            <div className="partnerCircle graceCircle">
              <img src="/assets/images/logo.svg" alt="Grace Technologies logo" />
            </div>
            <div className="partnerCircle ankCircle">
              <img src="/images/ank-square-logo.svg" alt="Ank Square logo" />
            </div>
          </div>
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
