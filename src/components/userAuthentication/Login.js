// libraries
import React from "react";
import { withFormik, Form, Field } from "formik";
import axiosWithAuth from "./../../utils/AxiosWithAuth";
import * as yup from "yup";
import { connect } from "react-redux";

//actions
import { login } from "./../../store/authentication/";

const LoginForm = ({ errors, touched, ...props }) => {
  return (
    <div className="login-form">
      <Form>
        <Field type="text" name="username" placeholder="username" />
        {touched.username && errors.username && (
          <p className="errors">"Please enter a valid user name."</p>
        )}

        <Field type="password" name="password" placeholder="password" />
        <p>*Password must be between 6 and 12 characters in length.</p>
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}

        <button type="submit">Login</button>
        {/* if userName is not registered
      return ALERT - user not found, please register to Login
      and return user to registration page on alert message accept */}
      </Form>
    </div>
  );
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
      .label("username")
      .required(),
    password: yup
      .string()
      .label("password")
      .required()
      .min(6, "Password must be at least 6 characters long.")
      .max(10, "Password must not exceed 12 characters.")
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
  }
})(LoginForm);

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps, { login })(FormikLogin);
