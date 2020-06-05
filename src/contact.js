import React from 'react';
import './index.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row contactDetails">

          <div className="col-xs-12 col-md-6 col-sm-6 col-lg-6">
            <h3>Residence Address:</h3>
            <p>Flat-001, Viceroy Boulevard-2</p>
             <p>6th Main, Marathahalli</p>
             <p>Tulasi Theatre Road</p>
             <p>Bangalore</p>
             <p>560037</p>
             <a href="mailto:vikaskumar94317@gmail.com" title="mail">vikaskumar94317@gmailt.com</a>
             <p>Mob. No.:<a href="#" title="mobile">8092317473 7909041704</a></p>
          </div>

          <div className="col-xs-12 col-md-6 col-sm-6 col-lg-6">
              <h3>Office Address:</h3>
              <p>2870, Building Virgo,</p>
               <p>Bagmane Constellation Business Park Circle,</p>
               <p>Outer Ring Road, Doddanekundi Circle,</p>
               <p>Bangalore</p>
               
               <p>560037</p>
                <a href="mailto:vkumar141@sapient.com" title="mail">vkumar141@sapient.com</a>
                <p>Mob. No.:<a href="#" title="mobile">8092317473 7909041704</a></p>
                
         </div>
     </div>
     </div>
    );
  }
}


export default Contact
