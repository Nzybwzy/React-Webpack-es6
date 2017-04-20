// var React = require('react');
// var Tab1= React.createClass({
//     render() {
//         return (
//             <div>
//                 React+Webpack+ES6从环境搭建到HelloWorld!<br />
//                 那么然后呢？
//             </div>
//         );
//     }
// });

// module.exports = Tab1;
import React, { Component } from 'react';
class Tab1 extends Component {
  render() {
    return (
        <div>
        	React+Webpack+ES6从环境搭建到HelloWorld!<br />
        	那么然后呢？
         </div>
    );
  }
}
module.exports = Tab1;