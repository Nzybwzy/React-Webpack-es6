import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tab from "./components/Tab";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
export default class AppComponent extends Component {
  render() {
    return (
    <div>
      	<Tab />
      	<Tab1 />
      	<Tab2 />
    </div>
      
    );
  }
}

ReactDOM.render(<AppComponent />, document.getElementById('content'));