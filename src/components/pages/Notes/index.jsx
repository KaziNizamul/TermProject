import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getNotes, deleteNote } from "../../../api";
import NotesList from "../../organisms/NotesList";
import Button from "../../atoms/Button";
import styles from "./index.module.scss";

const NotesPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: notes,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  const { mutate: deleteNoteHandler } = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });

  const handleNewNote = () => {
    navigate("/new-note");
  };

  const handleEditNote = (noteId) => {
    navigate(`/notes/${noteId}/edit`);
  };

  const handleDeleteNote = (noteId) => {
    deleteNoteHandler(noteId);
  };

  return (
    <div className={styles["notes-page"]}>
      <div className={styles["notes-header"]}>
        <h1>Notes</h1>
        <Button variant="primary" onClick={handleNewNote}>
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
