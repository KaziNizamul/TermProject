import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { confirmRegistration, register } from "../../../api";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import styles from "./index.module.scss";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [needsVerification, setNeedsVerification] = useState(false);

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log({ data });
      setNeedsVerification(data.needsVerification);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ name, email, password });
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      await confirmRegistration(email, otp);
      navigate("/login");
    } catch (err) {
      alert("Error verifying OTP");
    }
  };

  return (
    <div className={styles["register-page"]}>
      <div className={styles["register-form"]}>
        <h2>Register</h2>
        {isError && <div>Error: {error.message}</div>}
        {!needsVerification && (
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
            </div>
          </form>
        )}
        {needsVerification && (
          <form onSubmit={handleVerifyOTP}>
            <Input
              label="One time password (sent in email)"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <div className={styles["btn-group"]}>
              <Button type="submit" disabled={isLoading} variant="primary">
                {isLoading ? "Loading..." : "Register"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
