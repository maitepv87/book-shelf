import { BookCard } from "./BookCard";
import { useBookContext } from "../context/BookContext";

export const BookList = () => {
  const { state } = useBookContext();

  return (
    <div className="book-list">
      {state.error && <p className="error-message">{state.error}</p>}

      {state.isLoading ? (
        <p className="loading-message">Loading books...</p>
      ) : (
        state.books.map((book) => <BookCard key={book.id} book={book} />)
      )}
    </div>
  );
};
