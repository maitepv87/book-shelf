/**
 * AsyncContext + useAsyncReducer
 *
 * Modular React pattern for global async state management using Context and useReducer.
 * Designed for scalable, asynchronous data flows with built-in loading and error handling.
 *
 * @returns {Object} AsyncContext.Provider with { state, dispatch }
 *
 * Why this pattern?
 * - Avoids prop drilling by centralizing state.
 * - Keeps reducer pure and testable.
 * - Separates async logic for clarity and reuse.
 * - Adds a safe custom hook to prevent usage outside provider.
 *
 * Usage:
 * 1. Wrap your app with <AsyncProvider> to provide global access to state and dispatch.
 * 2. Use `useAsyncContext()` inside components to consume state and dispatch safely.
 * 3. Call `fetchAsyncData(dispatch)` to trigger an async request and update state.
 *
 * Example: Fetch and render a user list
 * import { useEffect } from "react"
 * import { useAsyncContext } from "./context/AsyncContext"
 * import { fetchAsyncData } from "./context/fetchAsyncData"
 *
 * const UserList = () => {
 *   const { state, dispatch } = useAsyncContext()
 *   useEffect(() => {
 *     fetchAsyncData(dispatch, "./api.json")
 *   }, [dispatch])
 *   if (state.isLoading) return <p>Loading...</p>
 *   if (state.error) return <p>Error: {state.error}</p>
 *   return (
 *     <ul>
 *       {state.data.map(user => (
 *         <li key={user.id}>{user.name}</li>
 *       ))}
 *     </ul>
 *   )
 * }
 */

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


