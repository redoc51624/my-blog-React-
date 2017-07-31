import './index.css';
import styles from './App.css';
import React, { Component, PropTypes } from 'react';
import * as firebase from 'firebase';
import Typist from 'react-typist';
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
      aboutMe: "Vikas Kumar (Interactive Developer-Associate-L1)",
      internalPro: "Loading.....",
      externalPro: "Loading.....",
      skills: "Loading.....",
    };
  };
  componentDidMount(){
    const rootRef = firebase.database().ref().child('react');
    const aboutMeRef = rootRef.child('aboutMe');
    const internalProjRef = rootRef.child('internalProjects');
    const externalProjRef = rootRef.child('projectExternal');
    const skillRef = rootRef.child('skills');

    aboutMeRef.on('value', snap => {
      this.setState({
        aboutMe: snap.val()
        });
    });
      internalProjRef.on('value', snap => {
      this.setState({
        internalPro: snap.val()
        });
    });
      externalProjRef.on('value', snap => {
      this.setState({
        externalPro: snap.val()
        });
    });
      skillRef.on('value', snap => {
      this.setState({
        skills: snap.val()
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

            <h3 className="aboutTitle">
            <Typist> Vikas Kumar (Associate L1)</Typist>
            </h3>
            <div className="container aboutContent col-xs-12 col-md-12 col-sm-12 col-lg-12">
              <div className="row">
                <p className="aboutMe"><h2>About Me:</h2>{this.state.aboutMe}</p>
                <p className="internalProj"><h2>IAP-1 Project:</h2>{this.state.internalPro.iap1}</p>
                <p className="internalProj"><h2>IAP-2 Project:</h2>{this.state.internalPro.iap2}</p>
                <p className="internalProj"><h2>Shadow Project:</h2>{this.state.internalPro.shadow}</p>
                <p className="externalProj"><h2>External Client Projects:</h2>{this.state.externalPro}</p>
                <p className="techskills"><h2>Technical Skills</h2>{this.state.skills}</p>
              </div>
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
