import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./../../store/AuthContext";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { SlBasket } from "react-icons/sl";
import { CgUserlane } from "react-icons/cg";

export default function Header() {
  const { logout } = useContext(AuthContext);
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
        <Col>
          <div className={styles.header_bottom_personal}>
            <Link to="/cart">
              <SlBasket />
            </Link>
            <div>
              <Button
                variant="outline-warning"
                className={styles.btn_sign_out}
                onClick={() => {
                  navigate("/");
                  localStorage.removeItem("userName");
                  logout();
                }}
              >
                Sign-out
              </Button>
            </div>
            <div className={styles.header_bottom_user}>
              <CgUserlane />
              {localStorage.getItem("userName")}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
