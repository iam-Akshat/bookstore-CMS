/* eslint-disable max-len */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_BOOK } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BookForm = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(categories[0]);

  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!title) {
      setError(true);
      return;
    }
    setError(false);
    dispatch(CREATE_BOOK({
      id: Number(Date.now().toString().slice(-4)),
      title,
      category,
    }));
    setTitle('');
    setCategory(categories[0]);
  };
  return (
    <div className="book_form">
      <input type="text" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
      {error && <div>Book title required</div>}
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        {categories.map((cat) => <option key={Math.floor(Math.random() * 10000)}>{cat}</option>)}
      </select>
      <button type="submit" onClick={handleSubmit}>Add book</button>
    </div>
  );
};

export default BookForm;
