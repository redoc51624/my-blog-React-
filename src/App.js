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
        <div className="row App-header col-xs-12 col-sm-12 col-md-12">
          <img className="headerImg" src="http://1.bp.blogspot.com/_LRoLPBAy3Pw/TN2A98egqQI/AAAAAAAACps/f9wpivzL-2E/s1600/header+3+kolumner.png" alt="header img" />
          <span className="title">Welcome</span>
        </div>
        <div className="row">
          <div className="nav navbar col-xs-12 col-md-12 col-sm-12 col-lg-12">
           <Link className="navItem col-xs-3 col-md-3 col-sm-3 col-lg-3" to="/">Home</Link>
           <Link className="navItem col-xs-3 col-md-3 col-sm-3 col-lg-3" to="/newpost">Post Questions</Link>
           <Link className="navItem col-xs-3 col-md-3 col-sm-3 col-lg-3" to="/about">about me</Link>
           <Link className="navItem col-xs-3 col-md-3 col-sm-3 col-lg-3" to="/contact">contact me</Link>
          </div>
          </div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path = "/home" component = {Home} />
            <Route path = "/newpost" component = {NewPost} />
            <Route path = "/about" component = {About} />
            <Route path = "/contact" component = {Contact} />
          </Switch>

        <div className="row App-footer col-xs-12 col-sm-12 col-md-12">
          Copyright © 2017 Vikas Kumar
        </div>

        </div>
      </Router>
)

export default App
