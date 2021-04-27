import PropTypes from 'prop-types';

const Book = ({
  id, title, category, handleRemoveBook,
}) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td><button type="button" onClick={() => { handleRemoveBook({ id, title, category }); }}> Delete </button></td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
