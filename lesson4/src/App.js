import { useState } from 'react';
import './App.css';

import InputWithClear from './components/InputWithClean';
import AlertButton from './components/AlertButton';

function App() {
  const [name, setName] = useState('John');
  const [surname, setSurname] = useState('');

  const clear = () => {
    alert(`${name} ${surname}`)
    setName('');
    setSurname('');
  };

  return (
    <div className="App">
      <h1>Lesson4</h1>
      <InputWithClear value={name} setValue={setName} placeholder='Please enter your name'/>
      <InputWithClear value={surname} setValue={setSurname} placeholder='Please enter your surname'/>
      <AlertButton onButtonClick={clear} />
    </div>
  );
}

export default App;
