import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Services from './Components/Services';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Components/Navbar';
import './index.css'


function App() {
  return (
    <>    
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Redirect to="/"/>
    </Switch>
    </>
  );
}

export default App;
