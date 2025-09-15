import { BookCard } from "./BookCard";
import { useBookContext } from "../context/BookContext";

export const BookList = () => {
  const { state } = useBookContext();

  return (
    <div className="book-list">
      {state.books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};
