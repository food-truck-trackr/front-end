import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup"
import { __values } from "tslib";

<div className="registration-form">
    <Formik>
        <Form>
            <Field type="email" name="email" placeholder="email" />
            <Field type="text" name="userName" placeholder="username" />
            <Field type="text" name="password" placeholder="password" />
            <Field type="text" name="passwordVerify" placeholder="verify password" />
            <Field type="text" name="phone" placeholder="123-456-7890" />
            <label classname="checkbox-container">
                I would like to receive future promotions and FoodTruck location updates</label>
            <Field type="checkbox" name="consent" checked={values.consent}/>
            <label classname="checkbox-container">
                Check box to register as a FoodTruck TrackR Operator  </label>
            <Field type="checkbox" name="operator" checked={values.operator}/>
            <button type="submit">Register</button>
        </Form>
    </Formik>
</div>