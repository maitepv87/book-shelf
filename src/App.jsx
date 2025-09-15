import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCreate, BookList } from "./components";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    };

    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    const updateBooks = [...books, response.data];
    setBooks(updateBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
    </>
  );
}

export default App;
