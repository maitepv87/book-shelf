import axios from "axios";
import { ACTION_TYPES } from "../actionTypes";

export const createBook = async (dispatch, title) => {
  try {
    const response = await axios.post("http://localhost:3001/books", { title });
    dispatch({
      type: ACTION_TYPES.CREATE_BOOK_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.CREATE_BOOK_ERROR, payload: error.message });
  }
};
