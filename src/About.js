import './index.css';
import React, { Component, PropTypes } from 'react';
import * as firebase from 'firebase';
import {
  TwitterButton,
  FacebookLikeButton,
  FacebookShareButton,
  FacebookMessengerButton,
  GoogleButton,
  GoogleHangoutButton,
  PinterestButton,
  WhatsAppButton
} from 'react-social-buttons';

class About extends React.Component {

    isBrowser () {
    return !(typeof document === "undefined" || typeof window === "undefined");
  }
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
       let url = ''
   if (this.isBrowser()) 
    {
     url = window.location.href; 
   }
 
   let whatsAppProps = {
     msg: 'test',
     button: <span>{'Share the posts by Vikas Kumar'}</span>,
   };
    return (
       <div>
        <div className="container contents col-xs-12 col-md-12 col-sm-12 col-lg-12">
            <div className="row">
              <h4 className="aboutContent">{this.state.speed}</h4>
            </div>
         <div className="row">
          <div className="socialContact">
            <div id="buttons">
            <FacebookLikeButton url={url} />
            <FacebookShareButton url={url} />
            <FacebookMessengerButton url={url} />
            <TwitterButton url={url} text="Check the posts by Vikas Kumar"/>
            <GoogleButton url={url} />
            <GoogleHangoutButton url={url} />
            <PinterestButton url={url} />
            <WhatsAppButton {...whatsAppProps} />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}


export default About
