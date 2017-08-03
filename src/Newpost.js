import React from 'react';
import styles from './Newpost.css';
import './index.css';
import * as firebase from 'firebase';

class NewPost extends React.Component {
  constructor() {
   super();

   this.state = {
      postQuestions: []
   }

   this.setStateHandler = this.setStateHandler.bind(this);
};
setStateHandler() {
   var item = "setState..."
   var myArray = this.state.postQuestions;
   myArray.push(item)
   this.setState({postQuestions: myArray})
};

  componentDidMount(){
    const rootRef = firebase.database().ref().child('react');
    const quesPostRef = rootRef.child('postQuestions');
    quesPostRef.on('value', snap => {
      this.setState({
        postQuestions: snap.val()
        });
    });
  }
  render() {
    return (
      <div>
      <div className="contents col-xs-12 col-md-12 col-sm-12 col-lg-12">
           <ul>
            <li><h2>Create your moments , Just spill it out of your mind</h2></li>
           </ul>
           <div className="newPostForm col-xs-12 col-md-8 col-md-offset-4 col-sm-8 col-sm-offset-4 col-lg-8 col-lg-offset-4">
             <label className="inputField heading">Heading:<input type="text" className="postHeading" name="Heading" /></label>
             <label  className="inputField date">Date:<input type="date" name="Date" /></label>
              <label className="inputField fName">First Name:<input type="text" name="fstName" /></label>
             <label  className="inputField lName">Last Name:<input type="text" name="lstName" /></label>
            <label  className="inputField occupation">Your occupation:<input type="text" name="occupation" /></label>
            <textarea className="blogContent" name="blogContent" form="newPostForm">Enter your question here...</textarea>
            <div className="formSubmit">
             <button className="btn btn-primary" onClick = {this.setStateHandler}>Submit</button>
             </div>
           </div>
      </div>
      </div>
    );
  }
}


export default NewPost
