import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createNote } from "../../../api";
import Input from "../../atoms/Input";
import TextArea from "../../atoms/TextArea";
import Button from "../../atoms/Button";
import styles from "./index.module.scss";

const NewNotePage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const {
    mutate: createNoteHandler,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
      setTitle("");
      setContent("");
      navigate("/notes");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createNoteHandler({ title, content });
  };

  return (
    <div className={styles["new-note-page"]}>
      <form className={styles["new-note-form"]} onSubmit={handleSubmit}>
        <h2>New Note</h2>
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

export default NewNotePage;