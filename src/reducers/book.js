const initialState = {
  books: [
    {
      id: 12121,
      title: 'The book',
      category: 'Action',
    },
    {
      id: 1211,
      title: 'The hallows of redux',
      category: 'Horror',
    },
    {
      id: 111,
      title: 'The love of redux toolkit',
      category: 'Romantic',
    },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK': {
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
