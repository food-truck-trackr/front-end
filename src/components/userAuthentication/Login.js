import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup"

<div className="registration-form">
    <Formik>
        <Form>
            <Field type="text" name="userName" placeholder="username" />
            <Field type="text" name="password" placeholder="password" />
            <button type="submit">Register</button>
        </Form>
    </Formik>
</div>