import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup"

<div className="registration-form">
  <Form>
    
    <Field type="text" name="user name" placeholder="username" />
    {touched.userName && errors.userName && (<p className="errors">"Please enter a valid user name."</p>)}
        
    <Field type="password" name="password" placeholder="password" />
    <p>*Password must be between 6 and 12 characters in length.</p>
    {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}

    <button type="submit">Register</button>
  
  </Form>
</div>

export default Login