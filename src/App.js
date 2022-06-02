import React from 'react';
import './App.css';
import Login from './Components/Login';
import useLocalStorage from './Hooks/useLocalStorage';

function App() {
  const [id, setId] = useLocalStorage("id");

  return (
    <>
      {id}
      <Login setId={setId}></Login>
    </>
  );
}

export default App;
