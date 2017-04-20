import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { Field, reduxForm, reducer as formReducer } from 'redux-form';

class FormComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        console.log(this.props);
        const { handleSubmit } = this.props;
        return (<div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName"  type="text"/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName"  type="text"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email"  type="email"/>
                </div>
                <button type="submit">Submit</button>
              </form></div>
        );
    }
}
FormComponent = reduxForm({
  form: 'contact' // a unique name for this form
})(FormComponent);
export default FormComponent