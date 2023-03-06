import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { BooksContextProvider } from "./store/booksContext";
import AuthProvider from "./store/AuthProvider";
import ThemeProvider from "react-bootstrap/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <BooksContextProvider>
          <ThemeProvider
            breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
            minBreakpoint="xxs"
          >
            <App />
          </ThemeProvider>
          ;
        </BooksContextProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
