const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK': {
      const book = action.payload;
      return {
        books: [...state.books, book],
      };
    }
    case 'REMOVE_BOOK': {
      const book = action.payload;
      const newBooks = state.books.filter((el) => {
        if (el.id !== book.id) return true;
        return false;
      });
      return {
        books: [...newBooks],
      };
    }

    default:
      return state;
  }
};

export default booksReducer;
