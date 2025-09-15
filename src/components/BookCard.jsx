import { useState } from "react";
import { BookEdit } from "./BookEdit";
import { useBookContext } from "../context/BookContext";
import { deleteBookById } from "../context/actions";

export const BookCard = ({ book }) => {
  const { state, dispatch } = useBookContext();

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    deleteBookById(dispatch, book.id);
  };

  return (
    <div className="book-card">
      <img
        src={`https://picsum.photos/seed/${book.id}/80/80`}
        alt="Book cover"
        className="book-image"
      />

      <div className="book-content">
        {isEditing ? (
          <BookEdit book={book} setIsEditing={setIsEditing} />
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
