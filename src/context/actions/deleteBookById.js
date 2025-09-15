import { ACTION_TYPES } from "../actionTypes";

export const deleteBookById = async (dispatch, id) => {
  dispatch({ type: ACTION_TYPES.FETCH_BOOK_STARTED });

  try {
    await axios.delete(`http://localhost:3001/books/${id}`);

    dispatch({ type: ACTION_TYPES.DELETE_BOOK, payload: data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.FETCH_BOOK_FAILED, payload: error.message });
  }
};
