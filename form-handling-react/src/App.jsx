import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div className="App">
      <h1>Registration Form with Manual Validation</h1>
      <RegistrationForm />

      <h1>Registration Form with Formik</h1>
      <FormikForm />
    </div>
  );
}

export default App;
