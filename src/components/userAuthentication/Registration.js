import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup"

<div className="registration-form">
  <Formik>
    <Form>
      <Field type="email" name="email" placeholder="email" />
      <Field type="text" name="userName" placeholder="username" />
      <Field type="text" name="password" placeholder="password" />
      <Field type="text" name="passwordVerify" placeholder="retype password to confirm" />
      <Field type="text" name="phone" placeholder="123-456-7890" />
      <label classname="checkbox-container">
          I would like to receive future promotions and FoodTruck TrackR location updates</label>
      <Field type="checkbox" name="consent" checked={values.consent}/>
      <label classname="checkbox-container">
          I would like to register as a FoodTruck TrackR Operator  </label>
      <Field type="checkbox" name="operator" checked={values.operator}/>
      <button type="submit">Register</button>
    </Form>
  </Formik>
</div>

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .label('email')
    .email()
    .required(),
    userName: yup
    .string()
    .label('userName')
    .email()
    .required(),
  password: yup
    .string()
    .label('password')
    .required()
    .min(6, 'Password must be at least 6 characters long.')
    .max(10, 'Password must not exceed 12 characters.'),
    password: yup
    .string()
    .label('passwordVerify')
    .required(),
  phone: yup
      .string()
      .label('phone')
      .email()
      .required()
  });