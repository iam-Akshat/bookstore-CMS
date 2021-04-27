import PropTypes from 'prop-types';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ handleFilterChange, currentFilter }) => (
  <select onChange={handleFilterChange} value={currentFilter}>
    {categories.map((cat) => <option key={Math.floor(Math.random() * 10000)}>{cat}</option>)}
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

export default CategoryFilter;
