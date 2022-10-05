import React, { useState, useEffect } from 'react';
import './App.css';
import NameInput from './components/NameInput'

function App() {
  
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  useEffect(() => {
    console.count(`render`)
  });

  useEffect(() => {
    if ( name.length > 0 || surname.length > 0) {
      document.title = `Hello, ${name} ${surname}`  
    } else {
      document.title = `Both name and surname`
    }
  }, [name, surname]);

  return (
    <div className="App">
      <h1>Lesson5</h1>
      <NameInput value={name} setValue={setName} placeholder='Please enter your name' />
      <NameInput value={surname} setValue={setSurname} placeholder='Please enter your surname' />
    </div>
  );
}

export default App;
