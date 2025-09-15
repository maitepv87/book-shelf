import { ACTION_TYPES } from "../actionTypes";

export const fetchBooks = async (dispatch) => {
  dispatch({ type: ACTION_TYPES.FETCH_BOOK_STARTED });

  try {
    const response = await axios.get("http://localhost:3001/books");

    if (!response.ok) throw new Error("Error fetching data");

    const data = await response.data;

    dispatch({ type: ACTION_TYPES.FETCH_BOOK, payload: data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.FETCH_BOOK_FAILED, payload: error.message });
  }
};
