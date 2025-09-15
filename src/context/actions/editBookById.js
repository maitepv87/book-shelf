import { ACTION_TYPES } from "../actionTypes";

export const editBookById = async (dispatch, id, newTitle) => {
  dispatch({ type: ACTION_TYPES.FETCH_BOOK_STARTED });

  try {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    if (!response.ok) throw new Error("Error editing book");

    const data = await response.data;

    dispatch({ type: ACTION_TYPES.EDIT_BOOK, payload: data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.FETCH_BOOK_FAILED, payload: error.message });
  }
};
