import React from "react";
import styles from "./index.module.scss";

const NoteItem = ({ title, content, date, onEdit, onDelete }) => {
  return (
    <div className={styles["note-item"]}>
      <h3 className={styles["note-title"]}>{title}</h3>
      <p className={styles["note-content"]}>{content}</p>
      <div className={styles["note-meta"]}>
        <div className={styles["note-date"]}>{date}</div>
        <div className={styles["note-actions"]}>
          <button
            className={`${styles.btn} ${styles["btn-secondary"]}`}
            onClick={onEdit}
          >
            Edit
          </button>
          <button
            className={`${styles.btn} ${styles["btn-danger"]}`}
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
