import React from "react";
import { withFormik, Form, Field, yupToFormErrors } from "formik";
import * as Yup from "yup";
import axiosWithAuth from "../axioswithAuth";

const AddFriend = () => {
  return (
    <Form>
      <Field type="text" name="name" placeholder="Name" />
      <Field type="number" name="age" placeholder="age" />
      <Field type="email" name="email" placeholder="email" />
      <button type="submit">Submit</button>
    </Form>
  );
};

const FormikAddFriend = withFormik({
  mapPropsToValues({ name, age, email }) {
    return {
      name: name || "",
      age: age || "",
      email: email || ""
    };
  },
  //==================Validation Schema==============

  validationSchema: Yup.object().shape({
    name: Yup.string().required("name is required"),
    age: Yup.string().required("age is required"),
    email: Yup.string().required("email is required")
  }),
  //==========End of Validation Schema=======
  handleSubmit(values, { resetForm, history }) {
    // console.log("Subit From props:", props);
    axiosWithAuth().post("/friends", {
      name: values.name,
      age: values.age,
      email: values.email
    });
    history.push("/FriendsList");

    // resetForm();
  }
})(AddFriend);

export default FormikAddFriend;

// //   name: Yup.string().required("name is required"),
// age: Yup.string().requiredJ("age is require"),
// email: Yup.string().required("email is required")
