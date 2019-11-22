import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";

const RegForm = ({ values, errors, touched, status, ...props }) => {
  console.log("props", props);
  const [user, setUser] = useState([]);
  // console.log(values, "values")

  useEffect(() => {
    status && setUser(user => [...user, status]);
  }, [status]);

  return (
    <div className="registration-form">
      <Form className="form">
        
        <Field className="field email" type="email" name="email" placeholder="email" />
        {touched.email && errors.email && (<p className="errors">{errors.email}</p>)}
        
        <Field className="field userName" type="text" name="username" placeholder="username" />
        {touched.username && errors.username && (<p className="errors">{errors.username}</p>)}
        
        <Field className="field password" type="password" name="password" placeholder="password" />
        <p className="text">*Password must be at least 6 characters.</p>
        {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}
        
        <Field className="field passwordVerify" type="password" name="passwordVerify" placeholder="confirm password" />
        {touched.passwordVerify && errors.passwordVerify} 
        {/* && (<p className="errors">"You must confirm your password!"</p>)} */}

        <Field className="field name" type="text" name="name" placeholder="name" />
        {touched.name && errors.name && (<p className="errors">{errors.name}</p>)}        
        
        {/* <div> */}
        {/* <label classname="checkbox-container">
            Yes! I would like to receive future promotions and FoodTruck TrackR location updates via text message!</label>
        <Field type="checkbox" name="consent" checked={values.consent}/> */}
        {/* </div> */}
        
        
        <label className="text" id="register">
          I would like to register as a FoodTruck TrackR </label>
        <Field className="field role-select" as="select" name="role">
          <option placeholder="select" default={false} hidden={true}>...select</option>
          <option placeholder="select" disabled="disabled" default={false}>...select</option>
          <option type="text" value="diner" default={false}>Diner</option>
          <option type="text" value="operator" default={false}>Operator</option>
        </Field>
        {touched.role && errors.role && (<p className="errors">{errors.role}</p>)}

        <button type="submit">Register</button>
      </Form>
    </div>
  ); //closes RegForm return
}; //closes RegForm

const FormikRegistration = withFormik({
  mapPropsToValues({ username, email, password, passwordVerify, name, role }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      passwordVerify: passwordVerify || "",
      name: name || "",
      role: role || ""
    };
  },

  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email()
      .required("Email is required"),
    username: yup
      .string()
      .required("Username is required"),
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
        return this.parent.password === val;
      }),
    name: yup.string().required("Name is required"),
    role: yup.string().required("Must register as either diner or operator")
  }),

  handleSubmit(values, { setStatus, props }) {
    // if (this.role === false) {
    //   return alert("you failed!")
    // };

    const person = {
      username: values.username,
      password: values.password,
      role: values.role,
      name: values.name,
      email: values.email
    };

    console.log(person);

    axios
      .post("https://food-truck-trakr.herokuapp.com/api/register", person)
      .then(
        props.history.push({
          pathname: "/",
          state: {
            username: person.username,
            password: person.password
          }
        })
      )
      .catch(err => console.log(err.response));
  }
})(RegForm);

export default FormikRegistration;
