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
    const rootRef1 = firebase.database().ref().child('1');
    const titleRef1 = rootRef1.child('title');
    const dateRef1 = rootRef1.child('date');
    const postRef1 = rootRef1.child('description');

    const rootRef2 = firebase.database().ref().child('2');
    const titleRef2 = rootRef2.child('title');
    const dateRef2 = rootRef2.child('date');
    const postRef2 = rootRef2.child('description');

    titleRef1.on('value', snap => {
      this.setState({
        header1: snap.val()
        });
    });
        dateRef1.on('value', snap => {
      this.setState({
        date1: snap.val()
        });
    });
      postRef1.on('value', snap => {
      this.setState({
        description1: snap.val()
        });
    });

         titleRef2.on('value', snap => {
      this.setState({
        header2: snap.val()
        });
    });
        dateRef2.on('value', snap => {
      this.setState({
        date2: snap.val()
        });
    });
      postRef2.on('value', snap => {
      this.setState({
        description2: snap.val()
        });
    });
  }
  render() {
    return (
      <div className="container contents col-xs-12 col-md-12 col-sm-12 col-lg-12">
           <ul className="row">
           <li> 
                  <h1> {this.state.header1}</h1>
                <p>Posted On: {this.state.date1}</p>
                <p className="srtDescr">{this.state.description1}</p>
               
           </li>
           <li> 
                  <h1>{this.state.header2}</h1>
                 <p>Posted On: {this.state.date2}</p>
                <p className="srtDescr">{this.state.description2}</p>
               
           </li>
           </ul>
      </div>
    );
  }
}


export default Home
