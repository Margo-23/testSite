import React from 'react';
import './App.css';
import axios from 'axios';
import UsersContainer from './components/Get/UsersContainer';
import NewUserContainer from './components/Post/NewUserContainer';
import Header from './components/Header/Header';

function App() {


  return (
    <div className="App">

      <Header/>
      <UsersContainer/>
      <NewUserContainer />

    </div>
  );
}

export default App;
