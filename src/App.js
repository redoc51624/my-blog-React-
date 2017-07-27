import React from 'react'
import styles from './App.css';
import Contact from './contact.js';
import About from './About.js';
import NewPost from './Newpost.js';
import Register from './Register.js';
import Home from './Home.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import ('./contact.js');

const App = () => (

  <Router>
        <div className="container">
        <div className="App-header jumbotron">
          <img className="headerImg" src="http://1.bp.blogspot.com/_LRoLPBAy3Pw/TN2A98egqQI/AAAAAAAACps/f9wpivzL-2E/s1600/header+3+kolumner.png" alt="header img" />
          <span className="title">Welcome</span>
          </div>
          <div role="menu" className="navbar dropdown-menu col-xs-12 col-md-11 col-md-offset-1 col-sm-10 col-sm-offset-2 col-lg-10 col-lg-offset-2">
           <Link className="navItem" to="/">Home</Link>
           <Link className="navItem" to="/newpost">newpost</Link>
           <Link className="navItem" to="/Register">Register</Link>
           <Link className="navItem" to="/about">about us</Link>
           <Link className="navItem" to="/contact">contact us</Link>
          </div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path = "/home" component = {Home} />
            <Route path = "/newpost" component = {NewPost} />
            <Route path = "/register" component = {Register} />
            <Route path = "/about" component = {About} />
            <Route path = "/contact" component = {Contact} />
          </Switch>
        </div>
      </Router>
)

export default App
