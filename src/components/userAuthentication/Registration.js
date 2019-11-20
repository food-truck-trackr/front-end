import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup"
import axios from "axios";

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
        
        <Field type="text" name="username" placeholder="username" />
        {touched.username && errors.username && (<p className="errors">user name is a required field</p>)}
        
        <Field type="password" name="password" placeholder="password" />
        <p>*Password must be at least 6 characters in length.</p>
        {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}
        
        <Field type="password" name="passwordVerify" placeholder="confirm password" />
        {touched.passwordVerify && errors.passwordVerify} 
        {/* && (<p className="errors">"You must confirm your password!"</p>)} */}

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
          <option type="boolean" hidden={true}>...select</option>
          <option type="boolean" disabled="disabled" default={true}>...select</option>
          <option type="text" value="diner">Diner</option>
          <option type="text" value="operator">Operator</option>
        </Field>
        </div>

        <button type="submit">Register</button>
      
      </Form>
    </div>

  )//closes RegForm return

};//closes RegForm

const FormikRegistration = withFormik({
  mapPropsToValues({
    username, 
    email, 
    password, 
    passwordVerify, 
    name,
    role}) 
    {
    return{
      username: username || "",
      email: email || "",
      password: password || "",
      passwordVerify: passwordVerify || "",
      name: name || "",
      role: role || false
    };
  },

  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    username: yup
      .string()
      .required(),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters.")
      .max(12, "Password must not exceed 12 characters."),
      // .matches(
      //   /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd@$!%*#?&]{6,}$/,
      //   ///^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{6,12}$/,
      //   "Must Contain One Uppercase, One Lowercase and One Number or special case Character"
      // )
      
    passwordVerify: yup
      .string()
      .required("Must confirm password!")
      // .oneOf([yup.ref("password"), null], "Passwords must match!"),
      .test("passwords-match", "Passwords must match!", function(val) {
        return this.parent.password === val;}),
    name: yup
      .string()
      .required("Name is required"),
    role: yup
      .string()
      
      // .when ({role = "false",
      //   then:yup.string().required("Must register as either diner or operator"),
      // })
      // .test("role-filled", "Must register as either diner or operator", function(val) {
      //   console.log(val, "role value")
      //   return "diner" === this.val || "operator" === this.val}),
  }),

  handleSubmit(values, {setStatus}) {
    
    const person = {
      username: values.username,
      password: values.password,
      role: values.role,
      name: values.name, 
      email: values.email}

      console.log(person)
      
    axios
    .post("https://food-truck-trakr.herokuapp.com/api/register", person)
    .then(response => {
      // console.log(person);
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