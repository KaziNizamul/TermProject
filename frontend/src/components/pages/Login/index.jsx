import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../api";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import styles from "./index.module.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      window.location.href = "/notes";
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <div className={styles["login-page"]}>
      <div className={styles["login-form"]}>
        <h2>Login</h2>
        {isError && <div>Error: {error.message}</div>}
        <form onSubmit={handleSubmit}>
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
              {isLoading ? "Loading..." : "Login"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => (window.location.href = "/register")}
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
