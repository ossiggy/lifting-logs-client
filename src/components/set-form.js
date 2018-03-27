import React, { Component } from 'react';
import {reduxForm, Field, focus, reset, formValueSelector} from 'redux-form';
import {connect} from 'react-redux';

import './css/set-form.css'

export class SetForm extends Component {
  render(){
    return(
      <div className="set-form-container col-8 offset-2">
        <form className="set-form">
          <div className="input-fields">
            <label htmlFor="title">Title</label>
            <Field 
              name="title"
              type="text" 
              component="input"
              label="title"
            />
            <label htmlFor="weight">Weight</label>
            <Field 
              name="weight"
              type="text" 
              component="input"
              label="weight"
            />
            <label htmlFor="reps">Reps</label>
            <Field
              name="reps"
              type="text" 
              component="input"
              label="Reps"
            />
          </div>
        </form>
      </div>
    );
  };
};

SetForm = reduxForm({
  form: 'SetForm'
})(SetForm);

const mapStateToProps = state => ({
  initialValues: {'reps':'Reps'},
  weight: state.weight.weight
})

export default connect(mapStateToProps)(SetForm);