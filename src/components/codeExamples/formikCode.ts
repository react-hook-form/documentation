export default `import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';

const Example = () => {
  const onSubmit = values => console.log(values);
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field
          name="email"
          validate={value =>
            !value
              ? 'Required'
              : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(value) &&
                'invalid email address'
          }
        />
        <ErrorMessage name="email" />

        <Field
          name="username"
          validate={value => value !== 'admin' || 'Nice try!'}
        />
        <ErrorMessage name="username" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
`
