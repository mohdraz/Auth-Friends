import React from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import axiosWithAuth from "../axioswithAuth";

const Login = () => {
  return (
    <Form>
      <Field type="text" name="username" placeholder="username" />
      <Field type="password" name="password" placeholder="password" />
      <button type="submit">Submit</button>
    </Form>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  //==================Validation Schema==============
  validationSchema: Yup.object().shape({
    username: Yup.string().required("username is required"),
    password: Yup.string().required("password is required")
  }),
  //==========End of Validation Schema=======

  handleSubmit(values, { resetForm, props }) {
    console.log("props from formik: ", props);
    axiosWithAuth()
      .post("/login", {
        username: values.username,
        password: values.password
      })
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/FriendsList");
      });

    resetForm();
  }
})(Login);

export default FormikLoginForm;
