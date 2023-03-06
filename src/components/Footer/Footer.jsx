import React from "react";
import styles from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <Container fluid className={styles.footer}>
      <Row>
        <Col>
          <div>
            <h4>
              Виконано в&nbsp;
              <a
                href="https://prometheus.org.ua/"
                className={styles.footer_link}
                target="_blank"
                rel="noreferrer"
              >
                Prometheus
              </a>
              &nbsp;© 2023
            </h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
