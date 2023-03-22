import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import BooksContext from "../../../store/booksContext";
import styles from "./Cart.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { AiOutlineClose } from "react-icons/ai";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

export default function Cart() {
  const { cart, setCart, purchaseCart } = useContext(BooksContext);

  useEffect(() => {
    localStorage.removeItem("cart");
  }, []);

  const totalPrice =
    cart
      .map((item) => item.count * item.price)
      .reduce((acc, curr) => acc + curr, 0)
      .toFixed(2) + " $";

  return (
    <>
      <Header />
      {cart.length === 0 ? (
        <Container fluid>
          <Row>
            <Col>
              <Button
                variant="outline-warning"
                className={styles.button_purchase}
                disabled
              >
                Purchase
              </Button>
            </Col>
          </Row>
          <div className={styles.empty_cart}>Cart is empty</div>
        </Container>
      ) : (
        <div>
          <Container fluid className={styles.cart}>
            <Row>
              <Col>
                <Button
                  variant="outline-warning"
                  className={styles.button_purchase}
                  onClick={() => setCart([])}
                >
                  Purchase
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={styles.cart_header}>
                  <div>Product</div>
                  <div>Count</div>
                  <div>Price</div>
                  <div>Total price</div>
                </div>
              </Col>
            </Row>
            {cart.map((item, id) => (
              <Row>
                <Col>
                  <div className={styles.item_in_cart} key={id}>
                    <Link to={`/books/${item.id}`}>
                      <div>{item.author}</div>
                      <div>{item.title}</div>
                    </Link>
                    <div></div>
                    <div className={styles.counter_wrapper}>
                      <input
                        type="text"
                        value={item.count}
                        className={styles.counter_value}
                      />
                    </div>
                    <div>{item.price + " $"}</div>
                    <div className={styles.head_value_price_total}>
                      {(item.count * item.price).toFixed(2) + " $"}
                    </div>
                    <Button
                      variant="outline-warning"
                      className={styles.btn_close}
                      onClick={() => {
                        purchaseCart(item.id);
                      }}
                    >
                      <AiOutlineClose />
                    </Button>
                  </div>
                </Col>
              </Row>
            ))}
            <Row>
              <Col>
                <div className={styles.head_value_total_price}>
                  Total price: {totalPrice}
                </div>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
}
