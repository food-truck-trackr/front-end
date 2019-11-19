import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup"
import Axios from "axios";

const RegForm = ({values, errors, touched, status}) => {
  const [user, setUser] = useState([]);
  console.log(values, "values")

  useEffect (() => {
    status && setUser(user => [...user, status]);
  }, [status])

  return(
    <div className="registration-form">
      <Form>
        
        <Field type="email" name="email" placeholder="email" />
        {touched.email && errors.email && (<p className="errors">{errors.email}</p>)}
        
        <Field type="text" name="user name" placeholder="username" />
        {touched.userName && errors.userName && (<p className="errors">"Please enter a valid user name."</p>)}
        
        <Field type="password" name="password" placeholder="password" />
        <p>*Password must be between 6 and 12 characters in length.</p>
        {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}
        
        <Field type="password" name="passwordVerify" placeholder="confirm password" />
        {touched.passwordVerify && errors.passwordVerify && (<p className="errors">"You must confirm you password!"</p>)}        
        
        <Field type="text" name="phone" placeholder="ex: 123-456-7890" />
        {touched.phone && errors.phone && (<p className="errors">{errors.phone}</p>)}        
        
        <div>
        <label classname="checkbox-container">
            Yes! I would like to receive future promotions and FoodTruck TrackR location updates via text message!</label>
        <Field type="checkbox" name="consent" checked={values.consent}/>
        </div>
        <div>
        <label classname="checkbox-container">
            I am a food truck owner/operator and would like to register as a FoodTruck TrackR Operator  </label>
        <Field type="checkbox" name="operator" checked={values.operator}/>
        </div>

        <button type="submit">Register</button>
      
      </Form>

      {/* {user.map(person => (
        key={person.id};
        name={person.userName};
      ))} */}
    </div>

  )//closes RegForm return

};//closes RegForm

const FormikRegistration = withFormik({
  mapPropsToValues({
    userName, 
    email, 
    password, 
    passwordVerify, 
    phone, 
    consent, 
    operator}) 
    {
    return{
      userName: userName || "",
      email: email || "",
      password: password || "",
      passwordVerify: passwordVerify || "",
      phone: phone || "",
      consent: consent || false,
      operator: operator || false
    };
  },

  validationSchema: yup.object().shape({
    email: yup
      .string()
      .label('email')
      .email()
      .required(),
    userName: yup
      .string()
      .label('userName')
      .required(),
    password: yup
      .string()
      .label('password')
      .required()
      .min(6, 'Password must be at least 6 characters long.')
      .max(10, 'Password must not exceed 12 characters.'),
    passwordVerify: yup
      .string()
      .label('passwordVerify')
      .required(),
    phone: yup
      .string()
      .label('phone'),
    consent: yup
      .boolean(),
      //needs .required if phone number has been entered
    operator: yup
      .boolean(),
  }),

  handleSubmit(values, {setStatus}) {
    Axios
    .post()
    .then(response => {
      console.log(response.data);
      setStatus(response.data);
      //if operator.value =true && email/username is unique
      //register operator and return operator landing page
      //else if operator.value=true && email/username is not unique
      //return email/username already registered
      //else if  email/username is unique
      //register diner and return diner landing page
      //else return email/username alread registered 
    })
    .catch(err => console.log(err.response));
  }
})(RegForm);

export default FormikRegistration;