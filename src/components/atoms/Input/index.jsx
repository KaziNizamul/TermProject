import React from "react";
import styles from "./index.module.scss";

const Input = ({ label, ...props }) => {
  return (
    <div className={styles["form-group"]}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles["form-control"]} {...props} />
    </div>
  );
};

export default Input;
