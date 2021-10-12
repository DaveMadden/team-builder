import React, { useState } from 'react';
import './App.css';
import Form from './Form'

// const initialTeam = [
//   {
//     name: "David",
//     email: "david@david.com",
//     role: "apprentice",
//   },
//   {
//     name: "Sean",
//     email: "sean@david.com",
//     role: "fluffer",
//   }
// ]

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}

function App() {
  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    console.log(`updateForm with ${inputName}, ${inputValue}`);
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    console.log(`submitForm with ${formValues.name}`);

    const newGuy = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    console.log(`newguy: ${newGuy.name} can be emailed at ${newGuy.name} for info about being a ${newGuy.role}`)
  }

  return (
    <div className="App">
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  );
}

export default App;
