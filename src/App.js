import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { ContactsProvider } from './Contexts/ContactsProvider';
import { ConversationsProvider } from './Contexts/ConversationProvider';
import useLocalStorage from './Hooks/useLocalStorage';

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider >
      <ConversationsProvider>
        <Dashboard id={id}></Dashboard>
      </ConversationsProvider>
    </ContactsProvider>
  )

  return (
    <>
      {id ? dashboard : <Login setId={setId}></Login>}

    </>
  );
}

export default App;
