import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

import PartyThemeListItem from './components/PartyThemeListItem';
import AddPartyTheme from './components/AddPartyTheme';
import PartyList from './components/PartyList';


const PartyListFromDB = () => {
  const [partyData, setPartyData] = useState(null);


  useEffect(() => {
    const db = firebase.firestore();
    const partyCollection = db.collection('party');
    partyCollection.onSnapshot(snapshot => {
      console.log('We got some party theme');
      let list = [];
      snapshot.forEach(doc => {
        let obj = {
          ...doc.data(),
          id: doc.id
        };
        list.push(obj);
      })
      setPartyData(list);
    })
  }, [])

  return (

    <div>

      <PartyList list={partyData} />
      <AddPartyTheme />

    </div>

  )

}

export default PartyListFromDB;
