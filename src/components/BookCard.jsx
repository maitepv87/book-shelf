import { useState, useCallback } from "react";
import { BookEdit } from "./BookEdit";
import { useBookContext } from "../context/BookContext";
import { deleteBook } from "../context/actions";

export const BookCard = ({ book }) => {
  const { dispatch } = useBookContext();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleDeleteClick = useCallback(() => {
    deleteBook(dispatch, book.id);
  }, [dispatch, book.id]);

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
              <button
                className="btn-edit"
                onClick={handleEditClick}
                aria-label={`Edit ${book.title}`}
              >
                Edit
              </button>
              <button
                className="btn-delete"
                onClick={handleDeleteClick}
                aria-label={`Delete ${book.title}`}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
