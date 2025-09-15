import { BookCard } from "./BookCard";

export const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
