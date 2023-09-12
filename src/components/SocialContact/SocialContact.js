import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function SocialContact() {
  return (
    <div>
      <section className="Social-Contact" style={{ display: "flex" }}>
        <a
          rel="noreferrer"
          href="https://www.facebook.com/p/Shalom-Billing-Services-LLC-100063617346703/"
          target="_blank"
          style={{ color: "black", paddingLeft: "10px", paddingRight: "10px" }}
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          rel="noreferrer"
          href="mailto:Billingshalom@gmail.com"
          target="_blank"
          style={{ color: "black", paddingLeft: "10px", paddingRight: "10px" }}
        >
          {" "}
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          rel="noreferrer"
          href="tel:7879753967"
          target="_blank"
          style={{ color: "black", paddingLeft: "10px", paddingRight: "10px" }}
        >
          {" "}
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </section>
    </div>
  );
}
