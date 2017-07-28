import React from 'react';

import './index.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="contactDetails">
        <div className="postalAddress">
          <p>Address:Phase-1,ITPL ROAD,</p>
          <p>Whitefield</p>
          <p>Bangalore</p>
          <p>560037</p>
        </div>
        <a href="mailto:abcd@gmail.com" title="Subject">abcd@gmail.com</a>
        </div>
        </div>
      </div>
    );
  }
}


export default Contact
