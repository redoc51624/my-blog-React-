import React from 'react';
import './index.css';
import * as firebase from 'firebase';

class Home extends React.Component {

  constructor() {
   super();
   this.state = {
      header1: "Header from state...",
      date1: "17/01/2017",
      description1: "Short description from state...",
       header2: "Header from state...",
      date2: "17/01/2017",
      description2: "Short description from state..."
   }
 }
   componentDidMount(){
    const rootRef = firebase.database().ref().child('1');
    const titleRef = rootRef.child('title');
    const dateRef = rootRef.child('date');
    const postRef = rootRef.child('description');
    titleRef.on('value', snap => {
      this.setState({
        header1: snap.val()
        });
    });
        dateRef.on('value', snap => {
      this.setState({
        date1: snap.val()
        });
    });
            postRef.on('value', snap => {
      this.setState({
        description1: snap.val()
        });
    });
  }
  render() {
    return (
      <div className="contents col-xs-12 col-md-10 col-md-offset-2 col-sm-12 col-lg-10 col-lg-offset-2">
           <ul className="col-xs-10 col-xs-offset-2 col-md-8 col-md-offset-4 col-sm-8 col-sm-offset-4 col-lg-8 col-lg-offset-4">
           <li> 
                  <h1> {this.state.header}</h1>
                <p>Posted On: {this.state.date}</p>
                <p className="srtDescr">{this.state.description}</p>
               
           </li>
           <li> 
                  <h1>{this.state.header}</h1>
                 <p>Posted On: {this.state.date}</p>
                <p className="srtDescr">{this.state.description}</p>
               
           </li>
           </ul>
      </div>
    );
  }
}


export default Home
