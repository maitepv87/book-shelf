import { useReducer } from "react";
import { ACTION_TYPES } from "./actionTypes";

// Initial state for async operations: loading, error, and data
const initialState = {
  isLoading: false,
  error: null,
  books: [],
};

// Reducer to handle async lifecycle: start, success, error, reset
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_BOOK_STARTED:
      return { ...state, isLoading: true, error: null };
    case ACTION_TYPES.FETCH_BOOK:
      return { ...state, isLoading: false, books: action.payload };
    case ACTION_TYPES.FETCH_BOOK_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    case ACTION_TYPES.RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

// Custom hook to manage async state transitions
export const useBookReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};
