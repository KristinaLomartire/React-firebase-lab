import React from 'react';
import PartyThemeListItem from './PartyThemeListItem';

  const PartyList = props => {

    let list = null;

    if( props.list ){
      list = props.list.map(party => (

        <PartyThemeListItem key={party.id} party={party} />

      ));
    }


    return (
      <div className="partyListUl">
            <h1>Party Theme for all Occasions</h1>
            <ul className="partyList"> {list} </ul>
      </div>
    )



  };

  export default PartyList;
