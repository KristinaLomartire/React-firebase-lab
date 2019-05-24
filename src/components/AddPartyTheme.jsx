import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';


class AddPartyTheme extends React.Component {



        state = {

                themeName: '',
                propsName: '',
                gameName: '',
        }

        handleChangeThemeName = e => {
            console.log('körs handleChangeInput');
                this.setState({
                  themeName: e.target.value,

                });

        }
        handleChangePropsName = e => {
            console.log('körs handleChangeInput');
                this.setState({
                  propsName: e.target.value,

                });

        }
        handleChangeGameName = e => {
            console.log('körs handleChangeInput');
                this.setState({
                  gameName: e.target.value,

                });

        }

        handleClickAdd = e => {
          let obj = {theme: this.state.themeName, props: this.state.propsName, game: this.state.gameName};
          const collectionRef = firebase.firestore().collection('party');
          collectionRef.add(obj)
          .then(() => {
            console.log('added theme');
          })
          .catch(error => {
            console.log('some funky business');
          })

          this.setState({
            themeName: '',
            propsName: '',
            gameName: '',

          })

        }

        render(){
          return (
            <div className="addingTheme">
                Add a new Amazing Theme <br />
                <input type="text" value={this.state.themeName}
                        onChange={this.handleChangeThemeName}
                        placeholder="Theme" />

                <input type="text" value={this.state.propsName}
                        onChange={this.handleChangePropsName}
                        placeholder="Prop" />

                <input type="text"  value={this.state.gameName}
                        onChange={this.handleChangeGameName}
                        placeholder="Game" />

                <button onClick={this.handleClickAdd}> Add </button>

            </div>
          )
        }

}


export default AddPartyTheme;
