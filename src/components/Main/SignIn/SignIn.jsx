import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../store/AuthContext";
import styles from "./SignIn.module.css";
import avatar from "./avatar.png";
import Container from "react-bootstrap/Container";
import HeaderForSignIn from "../../Header/HeaderForSignIn";

export default function SignIn() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Container fluid className={styles.main}>
        <HeaderForSignIn />
        <div>
          <img src={avatar} alt="avatar" className={styles.user_image} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label className={styles.user_login}>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            className={styles.user_login_input}
            {...register("userName", {
              required: true,
              minLength: {
                value: 4,
              },
              maxLength: {
                value: 16,
              },
              pattern: "[a-zA-Z][0-9]",
            })}
          />
          <div className={styles.error_message}>
            {errors?.userName?.value?.message ||
              "For authorization in the application, please enter from 4 to 16 characters for the username"}
          </div>
          <button
            type="submit"
            className={styles.user_login_button}
            disabled={!isValid}
            onClick={() => {
              localStorage.setItem("userName", getValues("userName"));
              navigate("/bookList");
              login();
            }}
          >
            Sign-In
          </button>
        </form>
      </Container>
    </>
  );
}
