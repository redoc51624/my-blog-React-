import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBHNVdUsePqzL9tTB_F_sMwW71pGqUMZXY",
  authDomain: "react-blog-4e990.firebaseapp.com",
  databaseURL: "https://react-blog-4e990.firebaseio.com",
  projectId: "react-blog-4e990",
  storageBucket: "react-blog-4e990.appspot.com",
  messagingSenderId: "261244525843"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App headerProp = "Header from props..." contentProp = "Content from props..."/>,
document.getElementById('root')
);
registerServiceWorker();

this.itemsRef = firebaseApp.database().ref();

// Get a reference to the database service
 // 
 // var userId = firebase.auth().currentUser.uid;
 // return firebase.database().ref('/react-blog-4e990/' + title).once('value').then(function(snapshot) {
 //   var blogTitle = snapshot.val().title;
 //   console.log("Print title": blogTitle);
 //   // ...
 // });
