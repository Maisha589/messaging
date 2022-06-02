import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import useLocalStorage from './Hooks/useLocalStorage';

function App() {
  const [id, setId] = useLocalStorage("id");

  return (
    <>
      {id ? <Dashboard id={id}></Dashboard> : <Login setId={setId}></Login>}

    </>
  );
}

export default App;
