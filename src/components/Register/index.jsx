import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles.css";

const Register = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Zorunlu alan"),
    lastName: Yup.string().required("Zorunlu alan"),
    email: Yup.string().email("Geçersiz email adresi").required("Zorunlu alan"),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="form-wrapper">
      <h1>{`React form management with Formik & Yup`}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Ad"
          onChange={handleChange}
          values={values.firstName}
        />
        <span>{errors.firstName ? errors.firstName : null}</span>
        <input
          type="text"
          name="lastName"
          placeholder="Soyad"
          onChange={handleChange}
          values={values.lastName}
        />
        <span>{errors.lastName ? errors.lastName : null}</span>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
          values={values.email}
        />
        <span>{errors.email ? errors.email : null}</span>
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
};

export default Register;
