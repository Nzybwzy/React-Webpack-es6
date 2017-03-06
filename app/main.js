import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tab1 from "./components/Tab1"
export default class AppComponent extends Component {
  render() {
    return (
    <div>
      	<h1>Hello, World!</h1>
      	<Tab1 />
    </div>
      
    );
  }
}
ReactDOM.render(<AppComponent />, document.getElementById('content'));