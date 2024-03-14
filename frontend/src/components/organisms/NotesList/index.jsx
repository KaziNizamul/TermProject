import React from "react";
import NoteItem from "../../molecules/NoteItem";
import styles from "./index.module.scss";

const NotesList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className={styles["notes-list"]}>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          title={note.title}
          content={note.content}
          date={note.date}
          onEdit={() => onEdit(note.id)}
          onDelete={() => onDelete(note.id)}
        />
      ))}
    </div>
  );
};

export default NotesList;
