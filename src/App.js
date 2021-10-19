import logo from './logo.svg';
import './App.css';
import User from './components/Users/User';
import About from './components/About/About';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <User></User>
      <About></About>
      <Home></Home>
      <NotFound></NotFound> */}

      <Router>
        <Switch>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/user">
                <User></User>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
