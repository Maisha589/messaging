import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { ContactsProvider } from './Contexts/ContactsProvider';
import useLocalStorage from './Hooks/useLocalStorage';

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider >
      <Dashboard id={id}></Dashboard>
    </ContactsProvider>
  )

  return (
    <>
      {id ? dashboard : <Login setId={setId}></Login>}

    </>
  );
}

export default App;
