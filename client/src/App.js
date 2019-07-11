import React from 'react';
import './App.css';
import UserRegistrationForm from './components/forms/UserRegistrationForm';
import AllUsers from './components/pages/AllUsers'

function App() {
  return (
    <div className="App">
        <AllUsers/>
          <UserRegistrationForm/>  
    </div>
  );
}

export default App;
