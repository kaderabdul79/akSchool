import logo from './logo.svg';
import './App.css';
import User from './components/Users/User';
import About from './components/About/About';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <User></User>
      <About></About>
      <Home></Home>
      <NotFound></NotFound>
    </div>
  );
}

export default App;
