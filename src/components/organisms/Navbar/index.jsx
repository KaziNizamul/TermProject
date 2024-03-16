import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles["navbar-brand"]}>
        Notes App
      </Link>
      <ul className={styles["navbar-nav"]}>
        <li className={styles["nav-item"]}>
          <Link to="/notes">Notes</Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link to="/new-note">New Note</Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link to="/login">Login</Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
