import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getNotes, deleteNote } from "../../../api";
import NotesList from "../../organisms/NotesList";
import Button from "../../atoms/Button";
import styles from "./index.module.scss";

const NotesPage = () => {
  const queryClient = useQueryClient();
  const {
    data: notes,
    isLoading,
    isError,
    error,
  } = useQuery(["notes"], getNotes);

  const { mutate: deleteNoteHandler } = useMutation({
    mutationFn: mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });

  const handleEditNote = (noteId) => {
    // Implement logic to edit the note
    console.log(`Editing note with ID: ${noteId}`);
  };

  const handleDeleteNote = (noteId) => {
    deleteNoteHandler(noteId);
  };

  return (
    <div className={styles["notes-page"]}>
      <div className={styles["notes-header"]}>
        <h1>Notes</h1>
        <Button variant="primary" href="/new-note">
          New Note
        </Button>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <NotesList
          notes={notes}
          onEdit={handleEditNote}
          onDelete={handleDeleteNote}
        />
      )}
    </div>
  );
};

export default NotesPage;
