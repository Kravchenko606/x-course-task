import React from "react";
import styles from "./NotFoundPage.module.css";
import HeaderForSignIn from "../Header/HeaderForSignIn";
import Container from "react-bootstrap/esm/Container";

export default function NotFoundPage() {
  return (
    <Container fluid>
      <HeaderForSignIn />
      <div className={styles.page_not_found}>
        <h2>Oops, something went wrong. 404 error</h2>
      </div>
    </Container>
  );
}
