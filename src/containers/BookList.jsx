import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(REMOVE_BOOK(book));
  };

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    dispatch(CHANGE_FILTER(newFilter));
  };
  // necessary
  // eslint-disable-next-line arrow-body-style
  const booksComponents = books.filter((book) => {
    if (book.category === filter || filter === 'All') return true;
    return false;
  }).map((book) => (
    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      category={book.category}
      handleRemoveBook={handleRemoveBook}
    />
  ));
  return (
    <div className="book_list">
      <CategoryFilter currentFilter={filter} handleFilterChange={handleFilterChange} />
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
