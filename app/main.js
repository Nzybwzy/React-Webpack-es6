import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Field, reduxForm, reducer as formReducer } from 'redux-form';
import { FormComponent } from './components/form'
const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

export default class APP extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        console.log(FormComponent)
        return (
            <Provider store={store}>
                <FormComponent></FormComponent>
            </Provider>
        );
    }
}

ReactDOM.render(<APP />, document.getElementById('content'));