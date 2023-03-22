import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../../store/ProtectedRoute";
import Layout from "../Layout/Layout";
import SignIn from "../Main/SignIn/SignIn";
import BookList from "../Main/BookList/BookList";
import SpecificBook from "../Main/SpecificBook/SpecificBook";
import Cart from "../Main/Cart/Cart";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="/signin" element={<Layout />} />
      <Route
        path="books"
        element={
          <ProtectedRoute>
            <BookList />
          </ProtectedRoute>
        }
      />
      <Route
        path="books/:id"
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
