import { useState } from "react";
import { useBookContext } from "../context/BookContext";
import { createBook } from "../context/actions";

export const BookCreate = () => {
  const { dispatch } = useBookContext();

  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      alert("Please enter a title");
      return;
    }

    createBook(dispatch, title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit} className="book-form">
        <input
          id="create-book-title"
          aria-label="Book title"
          type="text"
          placeholder="Enter book title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
