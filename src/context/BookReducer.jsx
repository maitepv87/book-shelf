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
    case ACTION_TYPES.FETCH_BOOK_REQUEST:
      return { ...state, isLoading: true, error: null };

    case ACTION_TYPES.FETCH_BOOK_SUCCESS:
      return { ...state, isLoading: false, books: action.payload };

    case ACTION_TYPES.FETCH_BOOK_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ACTION_TYPES.CREATE_BOOK_SUCCESS:
      return { ...state, books: [...state.books, action.payload] };

    case ACTION_TYPES.CREATE_BOOK_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ACTION_TYPES.UPDATE_BOOK_SUCCESS:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };

    case ACTION_TYPES.UPDATE_BOOK_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ACTION_TYPES.DELETE_BOOK_SUCCESS:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    case ACTION_TYPES.DELETE_BOOK_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ACTION_TYPES.RESET_BOOK_STATE:
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
