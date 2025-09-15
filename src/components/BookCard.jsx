import { useState } from "react";
import { BookEdit } from "./BookEdit";

export const BookCard = ({ book, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  return (
    <div className="book-card">
      <div className="book-image" />
      <div className="book-content">
        {isEditing ? (
          <BookEdit book={book} onEdit={onEdit} setIsEditing={setIsEditing} />
        ) : (
          <>
            <h3>{book.title}</h3>
            <div className="actions">
              <button onClick={handleEditClick}>Edit</button>
              <button onClick={handleDeleteClick}>Delete</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
