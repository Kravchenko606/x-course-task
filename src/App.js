import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./store/ProtectedRoute";
import SignIn from "./components/Main/SignIn/SignIn";
import Layout from "./components/Layout/Layout";
import BookList from "./components/Main/BookList/BookList";
import SpecificBook from "./components/Main/SpecificBook/SpecificBook";
import Cart from "./components/Main/Cart/Cart";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="/" element={<Layout />} />
      <Route
        path="bookList"
        element={
          <ProtectedRoute>
            <BookList />
          </ProtectedRoute>
        }
      />
      <Route
        path="specificBook/:id"
        element={
          <ProtectedRoute>
            <SpecificBook />
          </ProtectedRoute>
        }
      />
      <Route
        path="cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
