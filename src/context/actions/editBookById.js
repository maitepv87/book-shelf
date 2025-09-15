import axios from "axios";
import { ACTION_TYPES } from "../actionTypes";

export const editBookById = async (dispatch, id, newTitle) => {
  try {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    dispatch({
      type: ACTION_TYPES.UPDATE_BOOK_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.UPDATE_BOOK_ERROR, payload: error.message });
  }
};
