import React from "react";
import NoteItem from "../../molecules/NoteItem";
import styles from "./index.module.scss";

const NotesList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className={styles["notes-list"]}>
      {notes.map((note) => (
        <NoteItem
          key={note._id}
          title={note.title}
          content={note.content}
          date={note.date}
          onEdit={() => onEdit(note._id)}
          onDelete={() => onDelete(note._id)}
        />
      ))}
    </div>
  );
};

export default NotesList;
