import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup"
import axios from "axios";

const RegForm = ({values, errors, touched, status}) => {
  const [user, setUser] = useState([]);
  // console.log(values, "values")

  useEffect (() => {
    status && setUser(user => [...user, status]);
  }, [status])

  return(
    <div className="registration-form">
      <Form>
        
        <Field type="email" name="email" placeholder="email" />
        {touched.email && errors.email && (<p className="errors">{errors.email}</p>)}
        
        <Field type="text" name="username" placeholder="username" />
        {touched.username && errors.username && (<p className="errors">{errors.username}</p>)}
        
        <Field type="password" name="password" placeholder="password" />
        <p>*Password must be between 6 and 12 characters in length.</p>
        {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}
{/*         
        <Field type="password" name="passwordVerify" placeholder="confirm password" />
        {touched.passwordVerify && errors.passwordVerify && (<p className="errors">"You must confirm you password!"</p>)}        
         */}
        <Field type="text" name="name" placeholder="name" />
        {touched.name && errors.name && (<p className="errors">{errors.name}</p>)}        
        
        <div>
        {/* <label classname="checkbox-container">
            Yes! I would like to receive future promotions and FoodTruck TrackR location updates via text message!</label>
        <Field type="checkbox" name="consent" checked={values.consent}/> */}
        </div>
        <div>
        <label className="role">
            I would like to register as a FoodTruck TrackR </label>
        <Field as="select" name="role">
        <option>...select</option>
        <option value="diner">Diner</option>
        <option value="operator">Operator</option>
        {touched.role && errors.role && (<p className="errors">{errors.role}</p>)}   
        </Field>
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
    username, 
    email, 
    password, 
    // passwordVerify, 
    name,
    // phone, 
    // consent, 
    role}) 
    {
    return{
      username: username || "",
      email: email || "",
      password: password || "",
      // passwordVerify: passwordVerify || "",
      name: name || "",
      //phone: phone || "",
      // consent: consent || false,
      role: role || false
    };
  },

  validationSchema: yup.object().shape({
    email: yup
      .string()
      .label("email")
      .email()
      .required(),
    username: yup
      .string()
      .label("userName")
      .required(),
    password: yup
      .string()
      .label("password")
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long.")
      .max(10, "Password must not exceed 12 characters."),
    // passwordVerify: yup
      // .string()
      // .label("passwordVerify")
      // .oneOf([yup.ref("password"), null], "Passwords must match!"),
    name: yup
      .string()
      .label("name")
      .required("Name is required"),
    // consent: yup
    //   .boolean(),
      //needs .required if phone number has been entered
    role: yup
      .string()
      .required(),
  }),

  handleSubmit(values, {setStatus}) {
    axios
    .post("https://food-truck-trakr.herokuapp.com/api/register", values)
    .then(response => {
      console.log(response.data, "user values");
      setStatus(response.data);
      //if operator.value =true && email/username is unique
      //register operator and return operator landing page
      //else if operator.value=true && email/username is not unique
      //return email/username already registered
      //else if  email/username is unique
      //register diner and return diner landing page
      //else return email/username alread registered 
      //history.push to diner or operator dashboard
    })
    .catch(err => console.log(err.response));
  }
})(RegForm);

export default FormikRegistration;