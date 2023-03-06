import React, { useState, useEffect } from "react";

const BooksContext = React.createContext({ books: [{ title: "title" }] });

export function BooksContextProvider(props) {
  const [books, setBooks] = useState();
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);

  const minusCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const plusCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addToCart = (book) => {
    const { id } = book;
    const isBookInCart = cart.find((book) => book.id === id);
    if (isBookInCart) {
      const updatedCartBooks = cart.map((book) => {
        if (book.id === id) {
          return { ...book, count: book.count + count };
        }
        return book;
      });
      setCart(updatedCartBooks);
    } else {
      setCart([
        ...cart,
        {
          ...book,
          count,
        },
      ]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const purchaseCart = (id) => {
    setCart(
      cart.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        cart,
        setCart,
        addToCart,
        purchaseCart,
        count,
        setCount,
        minusCount,
        plusCount,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
