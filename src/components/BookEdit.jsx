import { useState } from "react";

export const BookEdit = ({ book, onEdit, setIsEditing }) => {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim()) {
      onEdit(book.id, title);
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
