import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import teamImg from "../../assets/health-team.jpg";

export default function CostsSection() {
  return (
    <section className="Costs-section">
      <Container>
        <Row>
          <Col>
            <img width={300} height={300} src={teamImg} alt="Health Team" />
          </Col>
          <Col>
            <p>
              The company is equipped to efficiently process a significant
              volume of invoices within a reasonable timeframe, minimizing
              errors in the billing process. They maintain excellent
              communication with insurers' management for effective rejection
              resolution. Additionally, Shalom Billing Services, LLC conducts
              weekly visits to insurers to submit reconciliation documents.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
