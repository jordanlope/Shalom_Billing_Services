import React from "react";
import { InlineWidget } from "react-calendly";

export default function ContactSection() {
  return (
    <section className="Contact-section">
      <h2>Set Up A Consultation</h2>
      <div>
        <InlineWidget
          url="https://calendly.com/shalombillingservices"
          styles={{ minWidth: 320, height: 700 }}
        />
      </div>
    </section>
  );
}
