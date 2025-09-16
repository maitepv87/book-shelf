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
    <div className="app-container">
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
