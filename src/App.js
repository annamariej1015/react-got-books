import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h2>App Page</h2>
        </div>

        <div>
          <HomePage />

        </div>
      </div>
    </div>
  );
};

export default App;
