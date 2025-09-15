import { useState } from "react";
import { useBookContext } from "../context/BookContext";
import { editBookById } from "../context/actions";

export const BookEdit = ({ book, setIsEditing }) => {
  const { state, dispatch } = useBookContext();

  const [title, setTitle] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim()) {
      editBookById(dispatch, book.id, title);
      setIsEditing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};
