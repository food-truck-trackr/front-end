// libraries
import React from "react";
import { connect } from "react-redux";
import { login } from "./../../store/authentication/";
import { withFormik, Form, Field } from "formik";
import axiosWithAuth from "./../../utils/AxiosWithAuth";
import * as yup from "yup";
import { Link } from "react-router-dom";


const LoginForm = ({ errors, touched, ...props }) => {
  return (
  <div className="login-form">
    <Form>
      
      <Field type="text" name="username" placeholder="username" />
      {/* {touched.username && errors.username && 
      (<p className="errors">"Please enter a valid user name."</p>)} */}

      <Field type="password" name="password" placeholder="password" />
      <p>*Password must be between 6 and 12 characters in length.</p>
      {/* {touched.password && errors.password && 
      (<p className="errors">{errors.password}</p>)} */}

      <button type="submit">Login</button>
      {/* if userName is not registered
      return ALERT - user not found, please register to Login
      and return user to registration page on alert message accept */}

      <Link className="clickToRegister" to="/Registration">Click here to register as a new user.</Link>
    </Form>
  </div>
  )
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: yup.object().shape({
    username: yup
      .string()
      //.label('username')
      .required("enter a username"),
    password: yup
      .string()
      //.label('password')
      .required("Password is required"),
  }),

  handleSubmit(values, { props }) {
    axiosWithAuth()
      .post("https://food-truck-trakr.herokuapp.com/api/login", values)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        // props.login();
        // props.history.push("/dinerdash");
      })
      .catch(err => console.log(err.response));
    
//   handleSubmit(values, {setStatus}) {
//     axios
//     .post("https://food-truck-trakr.herokuapp.com/api/login", values)
//     .then(response => {
//       console.log(response.data);
//       setStatus(response.data);
//       // if (status.status === "401") {
//       //   return (alert("Please check your username and password and try again."), history.push(Login))
//       // } 
//       //else if (response.data.role === "diner") {
//       //   return history.push(DinerDashboard)
//       // } else if (response.data.role === "operator") {
//       //   return history.push(OperatorDashboard)
//       // }
//       //if username matches registered user
//       //return login user to operator/diner landing page
//       //else if username is not found
//       //return ALERT - you must register to continue
//       //return user to registration page on ALERT clear.
//     })
//     .catch(err => console.log(err.response));
// 
}})(LoginForm);

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps, { login })(FormikLogin);
