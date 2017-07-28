import React from 'react';

import './index.css';

class Register extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        <form className="registerFrm col-xs-12 col-sm-12 col-md-8 col-md-offset-4 col-lg-8 col-lg-offset-4">
           <label className="fName">First Name:<input type="text" name="fstName" /></label>
           <label  className="lName">Last Name:<input type="text" name="lstName" /></label>
           <label>Date of Birth:<input type="date" name="name" /></label>
           <label>Email   <input type="email" name="email" /></label>
           <label>Phone     <input type="number" name="phone" /></label>
           <label>country:<input type="text" name="country" /></label>
           <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
      </div>
    );
  }
}

export default Register
