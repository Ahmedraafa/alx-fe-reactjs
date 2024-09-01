import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const RegistrationSchema = Yup.object ().shape ({
  username: Yup.string ().required ('Username is required'),
  email: Yup.string ()
    .email ('Invalid email address')
    .required ('Email is required'),
  password: Yup.string ()
    .min (6, 'Password is too short')
    .required ('Password is required'),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{username: '', email: '', password: ''}}
      validationSchema={RegistrationSchema}
      onSubmit={values => {
        console.log (values);
      }}
    >
      {() => (
        <Form>
          <div>
            <Field type="text" name="username" placeholder="Username" />
            <ErrorMessage name="username" component="div" />
          </div> <div>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
          </div> <div>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
          </div> <button type="submit"> Register </button>{' '}
        </Form>
      )}{' '}
    </Formik>
  );
};

export default FormikForm;
