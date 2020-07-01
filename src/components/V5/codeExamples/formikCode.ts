export default `import React from "react"
import { useFormik } from "formik"
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required").email("invalid email address"),
  username: Yup.string().notOneOf(["admin"], "Nice try!")
});

const Example = () => {
  const onSubmit = values => console.log(values);
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
    },
    onSubmit,
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email}

      <input
        id="username"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      {formik.errors.username}

      <button type="submit">Submit</button>
    </form>
  )
};
`
