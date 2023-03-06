import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function HeaderForSignIn() {
  const navigate = useNavigate();
  return (
    <Container fluid className={styles.header}>
      <Row className={styles.header_bottom_box}>
        <Col>
          <div className={styles.header_bottom_logo}>
            <h2 onClick={() => navigate("/bookList")}>
              JS BAND STORE/Kravchenko Alona
            </h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
