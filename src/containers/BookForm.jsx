/* eslint-disable max-len */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_BOOK } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BookForm = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');
  const [categoryError, setCategoryError] = useState(null);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = () => {
    if (!title) {
      setError(true);
      return;
    }
    if (!category) {
      setCategoryError(true);
      return;
    }
    setError(false);
    setCategoryError(false);
    dispatch(CREATE_BOOK({
      id: Number(Date.now().toString().slice(-4)),
      title,
      category,
    }));
    setTitle('');
    setCategory('');
  };
  return (
    <div className="book_form">
      <div className="name_input">
        <input type="text" placeholder="Book title" value={title} onChange={handleInput} />
        {error && <div className="error">Book title required</div>}
      </div>
      <div className="select_input">
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option key={69696} value="" hidden>Category</option>
          {categories.map((cat) => <option key={Math.floor(Math.random() * 10000)}>{cat}</option>)}
        </select>
        {categoryError && <div className="error">Choose a category</div>}
      </div>
      <button type="submit" onClick={handleSubmit}>ADD BOOK</button>
    </div>
  );
};

export default BookForm;
