import React from "react";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles["navbar-brand"]}>
        Notes App
      </a>
      <ul className={styles["navbar-nav"]}>
        <li className={styles["nav-item"]}>
          <a href="/notes">Notes</a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="/new-note">New Note</a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="/login">Login</a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="/register">Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
