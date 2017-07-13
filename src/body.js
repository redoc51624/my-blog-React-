import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class body extends Component{
  render(){
    return (

      <div className="container">
        <article>
          <ul>
            <li className="blogArticle">
            </li>
          </ul>
        </article>
          <aside>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </aside> //container
      </div>
    );
  }
}
ReactDOM.render(
 <body />,
 document.getElementById('main')
);
