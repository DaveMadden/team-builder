import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Form from './Form';
import Guy from './Guy';

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}

function App() {
  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    // console.log(`updateForm with ${inputName}, ${inputValue}`);
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    // console.log(`submitForm with ${formValues.name}`);

    const newGuy = {
      // id: uuid(),
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    // console.log(`newguy: ${newGuy.name} can be emailed at ${newGuy.email} for info about being a ${newGuy.role}`)
    
    if(!newGuy.name || !newGuy.email || !newGuy.role){
      window.alert("gotta fill out all the stuff, bro");
      return;
    }
    // setTeam([...team, newGuy])
    setTeam([...team, {...newGuy, id: uuid()}]);
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        team.map(guy => {
          return(
            <Guy key={guy.id} details={guy} />
          )
        })
      }
    </div>
  );
}

export default App;
