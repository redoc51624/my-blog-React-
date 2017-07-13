import React from 'react';

import './index.css';

class Register extends React.Component {
  render() {
    return (
      <div className="contents">
      <form className="registerFrm">
        <label className="fName">First Name:<input type="text" name="fstName" /></label>
        <label  className="lName">Last Name:<input type="text" name="lstName" /></label>
        <label>Date of Birth:<input type="date" name="name" /></label>
        <label>Email:<input type="email" name="email" /></label>
        <label>Phone:<input type="number" name="phone" /></label>
        <label>country:<input type="text" name="country" /></label>
        <input className="btn" type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Register
