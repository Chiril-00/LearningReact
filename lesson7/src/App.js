import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import User from './components/User';
import Input from './components/Input';

function App() {
  const [user, setUser] = useState(undefined)
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    async function getUser() {
      const response = await axios.get(`https://reqres.in/api/users/${userId}`);
      console.log(response);
      setUser(response.data.data)  
    }
    
    getUser();
  }, [userId]);
  
function onInputChange(newValue) {
  console.log('value from input', newValue);
  setUserId(newValue);
}

  return (
    <div className="App">
      <h1>Lesson 7</h1>
      <Input value={userId} onChange={onInputChange} />
      <User user={user} />
    </div>
  );
}

export default App;