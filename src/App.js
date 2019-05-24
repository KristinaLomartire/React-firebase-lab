import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import './App.css';
import PartyListFromDB from './PartyListFromDB';



  function App() {
    return (
      <div>
      <PartyListFromDB />
      </div>
    )

  }

  export default App;
