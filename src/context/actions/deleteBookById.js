import axios from "axios";
import { ACTION_TYPES } from "../actionTypes";

export const deleteBookById = async (dispatch, id) => {
  try {
    await axios.delete(`http://localhost:3001/books/${id}`);
    dispatch({ type: ACTION_TYPES.DELETE_BOOK_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.DELETE_BOOK_ERROR, payload: error.message });
  }
};
