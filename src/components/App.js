import './App.css';
import { Provider } from 'react-redux';
import store from '../reducers';
import BookList from '../containers/BookList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookList />
      </div>
    </Provider>
  );
}

export default App;
