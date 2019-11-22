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
      <Form className="form">
        <Field
          className="field"
          type="text"
          name="username"
          placeholder="username"
        />
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
        )}

        <Field
          className="field"
          type="password"
          name="password"
          placeholder="password"
        />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}

        <button type="submit">Login</button>
        {/* if userName is not registered
      return ALERT - user not found, please register to Login
      and return user to registration page on alert message accept */}

        <Link className="clickToRegister" to="/Registration">
          Click here to register as a new user.
        </Link>
      </Form>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password, ...props }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: yup.object().shape({
    username: yup
      .string()
      //.label('username')
      .required("Username is required!"),
    password: yup
      .string()
      //.label('password')
      .required("Password is required!")
  }),

  handleSubmit(values, { props }) {
    axiosWithAuth()
      .post("https://food-truck-trakr.herokuapp.com/api/login", values)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        console.log(response.data.role);
        props.login(response.data.role);
        if (response.data.role === "diner") {
          props.history.push("/dinerdash");
        } else if (response.data.role === "operator") {
          props.history.push("/operatordash");
        }
      })
      .catch(err => console.log(err.response));
  }
})(LoginForm);

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps, { login })(FormikLogin);
