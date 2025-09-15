import { ACTION_TYPES } from "../actionTypes";

export const createBook = async (dispatch, title) => {
  dispatch({ type: ACTION_TYPES.FETCH_BOOK_STARTED });

  try {
    const response = await axios.post("http://localhost:3001/books", { title });

    if (!response.ok) throw new Error("Error create book");

    const data = await response.data;

    dispatch({ type: ACTION_TYPES.ADD_BOOK, payload: data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.FETCH_BOOK_FAILED, payload: error.message });
  }
};
