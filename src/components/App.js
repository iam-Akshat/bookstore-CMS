import './App.css';
import { Provider } from 'react-redux';
import store from '../reducers';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookList />
        <BookForm />
      </div>
    </Provider>
  );
}

export default App;
