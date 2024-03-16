import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getNoteById, updateNoteById } from "../../../api";
import EditNoteUtility from "./util";
import Input from "../../atoms/Input";
import TextArea from "../../atoms/TextArea";
import Button from "../../atoms/Button";
import styles from "./index.module.scss";

const EditNotePage = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const {
    mutate: updateNoteHandler,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: (note) => updateNoteById(noteId, note),
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
      navigate("/notes");
      EditNoteUtility.notifyBySnS({ noteId });
    },
  });

  useEffect(() => {
    const fetchNote = async () => {
      const note = await getNoteById(noteId);
      setTitle(note.title);
      setContent(note.content);
    };
    fetchNote();
  }, [noteId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNoteHandler({ title, content });
  };

  return (
    <div className={styles["edit-note-page"]}>
      <form className={styles["edit-note-form"]} onSubmit={handleSubmit}>
        <h2>Edit Note</h2>
        {isError && <div>Error: {error.message}</div>}
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
        />
        <div className={styles["btn-group"]}>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save"}
          </Button>
          <Button
            variant="secondary"
            type="button"
            onClick={() => navigate("/notes")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditNotePage;
