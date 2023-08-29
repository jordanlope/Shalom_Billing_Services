import React from "react";

export default function ContactSection() {
  return (
    <section className="Contact-section">
      <h2>Contact Us</h2>
      <p>
        Ready to take control of your medical billing? Reach out to us today for
        a consultation.
      </p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
