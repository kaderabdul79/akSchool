import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'
import { BrowserRouter , Switch , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
