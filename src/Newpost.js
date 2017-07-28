import React from 'react';
import styles from './Newpost.css';
import './index.css';

class NewPost extends React.Component {
  constructor() {
   super();

   this.state = {
      data: []
   }

   this.setStateHandler = this.setStateHandler.bind(this);
};
setStateHandler() {
   var item = "setState..."
   var myArray = this.state.data;
   myArray.push(item)
   this.setState({data: myArray})
};
  render() {
    return (
      <div>
      <div className="contents col-xs-12 col-md-12 col-sm-12 col-lg-12">
           <ul>
            <li><h2>Create your moments , Just spill it out of your mind</h2></li>
           </ul>
           <div className="newPostForm col-xs-12 col-md-8 col-md-offset-4 col-sm-8 col-sm-offset-4 col-lg-8 col-lg-offset-4">
             <label className="heading">Heading:<input type="text" name="Heading" /></label>
             <label  className="date">Date:<input type="date" name="Date" /></label>
              <label className="fName">Blogger First Name:<input type="text" name="fstName" /></label>
             <label  className="lName">Blogger Last Name:<input type="text" name="lstName" /></label>
            <label  className="occupation">Your occupation:<input type="text" name="occupation" /></label>
            <textarea className="blogContent" name="blogContent" form="newPostForm">Enter your post here...</textarea>
           <label  className="tags">Tag related to post:<input type="text" name="tags" /></label>
             <button className="btn" onClick = {this.setStateHandler}>Submit Post</button>
           </div>
      </div>
      </div>
    );
  }
}


export default NewPost
