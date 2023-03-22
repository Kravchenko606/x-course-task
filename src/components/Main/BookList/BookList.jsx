import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BooksContext from "../../../store/booksContext";
import Select from "react-select";
import styles from "./BookList.module.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsSearch } from "react-icons/bs";
import Header from "../../Header/Header";
import Footer from "./../../Footer/Footer";

export default function BookList() {
  const navigate = useNavigate();
  const { books, setBooks } = useContext(BooksContext);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [option, setOption] = useState("");

  useEffect(() => {
    try {
      fetch("https://run.mocky.io/v3/cef9eb6d-f608-455b-9e75-33101a9e9d34")
        .then((response) => response.json())
        .then((data) => {
          setBooks(data);
          setFilteredBooks(data);
        });
    } catch (e) {
      console.log(e);
    }
  }, [setBooks]);

  const selectedOptions = [
    { value: "All", label: "All" },
    { value: "0 - 14.99$", label: "0 - 14.99$" },
    { value: "15 - 29.99$", label: "15 - 29.99$" },
    { value: "30 - 99.99$", label: "30 - 99.99$" },
  ];

  const chooseCurrentPrice = (options, arr = [...books]) => {
    let array;
    if (options.value === "All" || !options.value) {
      array = [...arr];
    } else if (options.value === "0 - 14.99$") {
      array = arr.filter((el) => el.price > 0 && el.price <= 14.99);
    } else if (options.value === "15 - 29.99$") {
      array = arr.filter((el) => el.price >= 15 && el.price <= 29.99);
    } else if (options.value === "30 - 99.99$") {
      array = arr.filter((el) => el.price >= 30);
    }
    return array;
  };

  const filteredTitle = (arr, title) => {
    return arr?.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  };

  const handlerSearch = (e) => {
    let newArr;
    setSearchTitle(e.target.value);

    const arr = chooseCurrentPrice(option);
    if (option) {
      newArr = filteredTitle(filteredBooks, searchTitle);
    } else {
      newArr = filteredTitle(arr, searchTitle);
    }
    setFilteredBooks(newArr);
  };

  const handlerSelectPrice = (option) => {
    setOption(option.value);
    const arr = filteredTitle(books, searchTitle);
    const newArr = chooseCurrentPrice(option, arr);
    setFilteredBooks(newArr);
  };

  useEffect(() => {
    if (!searchTitle && (!option || option === "All")) {
      setFilteredBooks(books);
    }
    setOption(option);
  }, [option, searchTitle, books]);

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col>
            <div className={styles.search_form_input}>
              <input
                type="text"
                placeholder="Search by book name"
                className={styles.search_form_input_search}
                onChange={(event) => handlerSearch(event)}
              />
              <Button
                variant="outline-warning"
                className={styles.search_form_input_button}
              >
                <BsSearch />
              </Button>
            </div>
          </Col>
          <Col>
            <div>
              <Select
                onChange={handlerSelectPrice}
                options={selectedOptions}
                placeholder="Select price"
                className={styles.dropdown_form}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.book_container}>
              {filteredBooks?.map((books) => (
                <Card className={styles.card} key={books.id}>
                  <Card.Img
                    variant="top"
                    className={styles.card_image}
                    src={books.image}
                    alt={books.title}
                  />
                  <Card.Body>
                    <Card.Title>{books.title}</Card.Title>
                    <Card.Text>{books.author}</Card.Text>
                    <div className={styles.card_bottom}>
                      <Card.Text className={styles.card_price}>
                        {books.price + " $"}
                      </Card.Text>

                      <Button
                        variant="outline-warning"
                        className={styles.button_view}
                        onClick={() => navigate(`/books/${books.id}`)}
                      >
                        View
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
