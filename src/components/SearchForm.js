import React, { useState, useEffect } from "react";
import { useFormik, withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function SearchForm() {
 
  const formik = useFormik({
    initialValues: {
      search: ''
    },
  });

  return (
    <section className="search-form">
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Search Character: </label>
      <input
        id="search"
        name="search"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <button type="submit">Search</button>
    </form>
    </section>
  );
}
