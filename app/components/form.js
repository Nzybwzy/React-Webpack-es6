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
        this.handsave = this.handsave.bind(this);
    }
    renderField(field) {
        // console.log('@#$',this.props.industryValue)
        const { label, input, type, meta:{touched, error}, options, must, disabled } = field;
            return(
                <div>
                    <label>{must &&<i style={{color:'red'}}>*</i>}{label}</label>
                    <div>
                      <input {...input} placeholder={label} type={type} disabled={disabled}/>
                      {touched && (error && <span>{error}</span>)}
                    </div>
                </div>
            )
    }
    handsave= (e, w, p) => {
        // console.log(e,w, p)
    }
    render() {
        const { handleSubmit } = this.props;
        return (<div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">First Name</label>
                    <Field name="name" type="text" must={true}  component={this.renderField} label="姓名"/>
                </div>
                <div>
                    <label htmlFor="email">Last Name</label>
                    <Field name="email" type="text" must={true}  component={this.renderField} label="邮箱"/>
                </div>
                <div>
                    <label htmlFor="age">Email</label>
                    <Field name="age" type="text" must={true}  component={this.renderField} label="年龄"/>
                </div>
                <button type="submit" onClick={handleSubmit(this.handsave)}>Submit</button>
              </form></div>
        );
    }
}
const validate = (values) => {
    console.log(values)
    const error = {};
    if(!values.name) {
        error.name = "名字必填"
    } else if(!values.email) {
        error.email = "邮箱必填"
    } else if(!values.age) {
        error.age = "年龄必填"
    }
    console.log(error)
    return error
}
FormComponent = reduxForm({
  form: 'contact', // a unique name for this form
  validate
})(FormComponent);
module.exports = FormComponent
