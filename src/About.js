import React from 'react';

import './index.css';

class About extends React.Component {
  constructor(){
    super();
    this.state = {
      header1 = something for h1;
       header2 = something for h2;
        header3 = something for h3;
        para1 = some data in paragraph 1;
        para2 = some data in paragraph 2;
        para3 = some data in paragraph 3;
    }
  }
  render() {
    return (
      <div>
       <div className="contents">
           <ul>
           <li> <h1>{this.state.header1}</h1>
               <p>{this.state.para1}</p>
           </li>
             <li> <h1>{this.state.header2}</h1>
               <p>{this.state.para2}</p>
           </li>
            <li> <h1>{this.state.header3}</h1>
               <p>{this.state.para3}</p>
           </li>
           </ul>
       </div>
      </div>
    );
  }
}


export default About
