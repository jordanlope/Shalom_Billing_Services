import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  faFileInvoice,
  faCode,
  faHandshake,
  faSuitcaseMedical,
  faNewspaper,
  faHand,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServicesSection() {
  return (
    <section className="Services-section">
      <h2>Our Services</h2>
      <Container>
        <Row>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <FontAwesomeIcon icon={faFileInvoice} />
                <br />
                Billing for all medical plans
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faCode} />
                <br />
                CPT and ICD10 code coding
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faHandshake} />
                <br />
                Payment reconciliation and appeals (if necessary)
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faSuitcaseMedical} />
                <br />
                Auditing of pending payment claims
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faHand} />
                <br />
                Handling of claim denials and supplemental plans
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faNewspaper} />
                <br />
                Direct interactions with medical plans
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
