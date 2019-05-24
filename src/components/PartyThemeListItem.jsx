import React, { useState, Fragment } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';



  const PartyThemeListItem = ({ party }) => {

    const [editMode, setEditMode] = useState(false);
    const [inputTheme, setInputTheme] = useState(party.theme);
    const [inputProps, setInputProps] = useState(party.props);
    const [inputGame, setInputGame] = useState(party.game);
    const [saveMode, setSaveMode] = useState(false);

    const deleteTheme = () => {
      firebase.firestore().collection('party').doc(party.id).delete()
      .then(() => console.log('You have successfully deleted a theme.'))
    }

    const saveChanges = () => {
      setEditMode(false);
      firebase.firestore().collection('party').doc(party.id)
      .update({ theme: inputTheme, props: inputProps, game: inputGame})

    }

    const editTheme = () =>{
        setEditMode(true)

    }

    let maybeTheme = party.theme;
    let maybeProps = party.props;
    let maybeGame = party.game;
    let editButtons = (
      <Fragment>
      <span role="img" aria-label="Edit" onClick={editTheme}>  ✏️</span>
      <span role="img" aria-label="delete" onClick={deleteTheme}>🗑️</span>
      </Fragment>
    );  // <> ... </>
    if( editMode  ) {
      console.log('piougfv');
      editButtons = null;
      maybeTheme = (
        <input type="text"
                value={inputTheme}
                onChange = {d => setInputTheme(d.target.value)} />

      );
      maybeProps = (
        <input type="text"
                value={inputProps}
                onChange = {d => setInputProps(d.target.value)} />

      );
      maybeGame = (
        <div><input type="text"
                value={inputGame}
                onChange = {d => setInputGame(d.target.value)} />
                <span role="img" aria-label="delete" onClick={saveChanges}>✔️</span></div>

      );
    }




      console.log('maybeTheme:', maybeTheme);
      return (
        <li className="card">
        <div className="tom">
          hejsan
        </div>
        <div>
          <div>
            <div className="partyListItem">
            {maybeTheme}
            </div>

            <div className="partyListItem">
            {maybeProps}
            </div>

            <div className="partyListItem">
            {maybeGame}
            </div>
          </div>
          <div className="editButtons">
            {editButtons}
          </div>
        </div>

        </li>

      )




    }







export default PartyThemeListItem;
