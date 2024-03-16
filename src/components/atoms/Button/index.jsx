import React from "react";
import styles from "./index.module.scss";

const Button = ({ children, variant = "primary", ...props }) => {
  const buttonClassNames = `${styles.btn} ${styles[`btn-${variant}`]}`;

  return (
    <button className={buttonClassNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
