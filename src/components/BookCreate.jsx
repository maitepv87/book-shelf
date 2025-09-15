import { useState } from "react";

export const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <input
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
