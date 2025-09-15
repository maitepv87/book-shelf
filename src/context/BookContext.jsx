import { createContext, useContext } from "react";
import { useBookReducer } from "./BookReducer";

// Create the context
export const BookContext = createContext();

// Provider that wraps the app
export const BookProvider = ({ children }) => {
  const { state, dispatch } = useBookReducer();
  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

// Hook to consume the context
export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("BookContext must be used within an BookProvider");
  }
  return context;
};
