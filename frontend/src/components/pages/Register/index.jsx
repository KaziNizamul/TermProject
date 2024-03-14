import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../../api";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import styles from "./index.module.scss";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      window.location.href = "/login";
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ name, email, password });
  };

  return (
    <div className={styles["register-page"]}>
      <div className={styles["register-form"]}>
        <h2>Register</h2>
        {isError && <div>Error: {error.message}</div>}
        <form onSubmit={handleSubmit}>
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles["btn-group"]}>
            <Button type="submit" disabled={isLoading} variant="primary">
              {isLoading ? "Loading..." : "Register"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
