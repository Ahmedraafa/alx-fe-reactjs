import React from 'react';
import RegistrationForm from './components/RegistrationForm.jsx';
import FormikForm from './components/FormikForm.jsx';

function App() {
  return (
    <div>
      <h1>Registration Form with Controlled Components</h1>
      <RegistrationForm />

      <h1>Registration Form with Formik</h1>
      <FormikForm />
    </div>
  );
}

export default App;
