import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BooksContext from "../../../store/booksContext";
import styles from "./SpecificBook.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

export default function SpecificBook() {
  const booksCtx = useContext(BooksContext);
  const { id } = useParams();
  const book = booksCtx.books?.find((item) => item.id === +id);

  const { count, minusCount, plusCount, addToCart } = useContext(BooksContext);

  return (
    <>
      <Header />
      <Container fluid>
        <div className={styles.book}>
          <Row>
            <Col xs={6} md={6} lg={4}>
              <img
                src={book?.image}
                alt={book?.title}
                className={styles.book_image}
              />
            </Col>
            <Col xs={6} md={6} lg={4}>
              <div className={styles.book_small_description}>
                <p>Book name: {book?.title}</p>
                <p>Book author: {book?.author}</p>
                <p>{book?.shortDescription}</p>
              </div>
            </Col>
            <Col xs={12} md={12} lg={4}>
              <div className={styles.book_price}>
                <div className={styles.head}>
                  <div className={styles.head_title}>
                    <span>Price</span>
                  </div>
                  <div className={styles.head_price}>
                    <div>{book?.price + " $"}</div>
                  </div>
                </div>

                <div className={styles.head}>
                  <div className={styles.head_title}>
                    <span>Count</span>
                  </div>
                  <div className={styles.head_price}>
                    <div className={styles.counter_wrapper}>
                      <button
                        className={styles.counter_btn}
                        data-direction="minus"
                        onClick={() => minusCount()}
                        disabled={count === 0}
                      >
                        -
                      </button>

                      <input
                        type="text"
                        value={count}
                        min="1"
                        max="42"
                        size="2"
                        className={styles.counter_value}
                      />

                      <button
                        className={styles.counter_btn}
                        data-direction="plus"
                        onClick={() => plusCount()}
                        disabled={count === 42}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className={styles.head}>
                  <div className={styles.head_title}>
                    <span>Total price</span>
                  </div>
                  <div className={styles.head_price}>
                    <div className={styles.head_value_price_total}>
                      {(count * book.price).toFixed(2) + " $"}
                    </div>
                  </div>
                </div>

                <div className={styles.head}>
                  <div className={styles.head_title}>
                    <span></span>
                  </div>
                  <div className={styles.head_price}>
                    <button
                      type="submit"
                      className={styles.button_buy}
                      onClick={() => addToCart({ ...book, count })}
                      disabled={count === 0}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className={styles.description}>
                <p>{book?.description}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
}
