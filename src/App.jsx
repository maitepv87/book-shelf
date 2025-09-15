import "./App.css";
import { useEffect } from "react";
import { BookCreate, BookList } from "./components";
import { useBookContext } from "./context/BookContext";
import { fetchBooks } from "./context/actions";

function App() {
  const { dispatch } = useBookContext();

  useEffect(() => {
    fetchBooks(dispatch);
  }, [dispatch]);

  return (
    <>
      <BookCreate />
      <BookList />
    </>
  );
}

export default App;
