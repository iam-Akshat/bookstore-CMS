import PropTypes from 'prop-types';
import { REMOVE_BOOK } from '../actions';

const Book = ({
  id, title, category, dispatch,
}) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td><button type="button" onClick={() => { dispatch(REMOVE_BOOK({ id, title, category })); }}> Delete </button></td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Book;
