import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "../../../api";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import styles from "./index.module.scss";

const NewNotePage = () => {
  const queryClient = useQueryClient();
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
        <Input
          label="Content"
          as="textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className={styles["btn-group"]}>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save"}
          </Button>
          <Button
            variant="secondary"
            type="button"
            onClick={() => (window.location.href = "/notes")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewNotePage;
