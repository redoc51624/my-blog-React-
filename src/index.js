import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
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

const txtEmail = document.getElementById('txtEmail');
const password = document.getElementById('pwd');
const btnlogin = document.getElementById('btnSignin');
const btnsignup = document.getElementById('btnSignUp');
const btnlogout = document.getElementById('btnLogout');  

//add login event
btnlogin.addEventListener('click', e =>{
	const email = txtEmail.value;
	const pass = password.value;
	const auth = firebase.auth();
	const promise = auth.signInWithEmailAndPassword('email','pass');
	promise.catch(e=>console.log(e.message));
});

//Sign up evnet
btnlogin.addEventListener('click', e =>{
	const email = txtEmail.value;
	const pass = password.value;
	const auth = firebase.auth();
	const promise = auth.createUserWithEmailAndPassword('email','pass');
	promise.catch(e=>console.log(e.message));
});

//Signout event
btnlogout.addEventListener('click', e=>{
	firebase.auth().signOut();
});

//add realtime listner
firebase.auth().onAuthStateChanged(firebaseUser=>{
	if(firebaseUser){
		console.log('firebase user');
	}
	else
	{
		console.log('Not logged in');
	}
});
}());


ReactDOM.render(<App headerProp = "Header from props..." contentProp = "Content from props..."/>,
document.getElementById('root')
);
registerServiceWorker();
