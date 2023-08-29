import React from "react";

export default function CostsSection() {
  return (
    <section className="Costs-section">
      <h2>Service Costs</h2>
      <ul>
        <li>Medical Billing: 3% of the total paid by medical plans.</li>
        <li>Reconciliation: 4% of the total paid by medical plans.</li>
        <li>
          Full Cycle (Billing and Reconciliation): 6% of the total paid by
          insurers.
        </li>
      </ul>
    </section>
  );
}
