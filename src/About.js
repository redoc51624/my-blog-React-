import React from 'react';
import './index.css';
import * as firebase from 'firebase';

class About extends React.Component {
  constructor(){
    super();
    this.state = {
      speed: 10
    };
  };
  componentDidMount(){
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
        });
    });
  }
  render() {
    return (
      <div>
       <div className="contents">
        <h1>{this.state.speed}</h1>
       </div>
      </div>
    );
  }
}


export default About
