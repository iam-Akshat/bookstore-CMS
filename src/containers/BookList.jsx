import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_BOOK } from '../actions';
import Book from '../components/Book';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(REMOVE_BOOK(book));
  };
  // necessary
  // eslint-disable-next-line arrow-body-style
  const booksComponents = books.map((book) => {
    return (
      <Book
        key={book.id}
        id={book.id}
        title={book.title}
        category={book.category}
        handleRemoveBook={handleRemoveBook}
      />
    );
  });
  return (
    <div className="book_list">
      <table>
        <thead>
          <tr>
            <th> Book id </th>
            <th> Title </th>
            <th> category </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {booksComponents}
        </tbody>
      </table>

    </div>
  );
};

export default BookList;
