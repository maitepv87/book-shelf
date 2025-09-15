import "./App.css";
import { useState } from "react";
import { BookCreate, BookList } from "./components";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updateBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updateBooks);
  };

  const editBookById = (id, newTitle) => {
    const udpatesBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(udpatesBooks);
  };

  const deleteBookById = (id) => {
    const udpatesBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(udpatesBooks);
  };

  return (
    <>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
    </>
  );
}

export default App;
