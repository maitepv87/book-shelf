import axios from "axios";
import { ACTION_TYPES } from "../actionTypes";

export const fetchBooks = async (dispatch) => {
  dispatch({ type: ACTION_TYPES.FETCH_BOOK_REQUEST });

  try {
    const response = await axios.get("http://localhost:3001/books");

    dispatch({ type: ACTION_TYPES.FETCH_BOOK_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.FETCH_BOOK_ERROR, payload: error.message });
  }
};
