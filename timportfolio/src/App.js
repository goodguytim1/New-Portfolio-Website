import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/work" component={Work}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
