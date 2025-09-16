import { useState } from "react";
import { useBookContext } from "../context/BookContext";
import { updateBook } from "../context/actions";

export const BookEdit = ({ book, setIsEditing }) => {
  const { state, dispatch } = useBookContext();

  const [title, setTitle] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim()) {
      updateBook(dispatch, book.id, title);
      setIsEditing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label htmlFor={`edit-book-title-${book.id}`}>Title</label>
      <input
        id={`edit-book-title-${book.id}`}
        aria-label="Book title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit" aria-label={`Save button`} className="btn-save">
        Save
      </button>
    </form>
  );
};
