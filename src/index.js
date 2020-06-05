import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import registerServiceWorker from './registerServiceWorker';

// Initialize Firebase
(function(){
const firebaseConfig = {
  apiKey: "AIzaSyBHNVdUsePqzL9tTB_F_sMwW71pGqUMZXY",
  authDomain: "react-blog-4e990.firebaseapp.com",
  databaseURL: "https://react-blog-4e990.firebaseio.com",
  projectId: "react-blog-4e990",
  storageBucket: "react-blog-4e990.appspot.com",
  messagingSenderId: "261244525843"
};
firebase.initializeApp(firebaseConfig);

}());


ReactDOM.render(<App headerProp = "Header from props..." contentProp = "Content from props..."/>,
document.getElementById('root')
);
registerServiceWorker();
