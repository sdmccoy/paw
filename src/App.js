import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';

import reducers from './reducers';
import Layout from './modules/Layout';

import pets from './data/pets';
import petContract from './data/petProfileContract'
import user from './data/user';
import userContract from './data/userProfileContract'

let petsData = petContract;
let userData = userContract;


class App extends Component {

  componentDidMount() {

    window.fetch(
      'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/settings.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(settingsJson => {
        userData = JSON.stringify(settingsJson);
      })
      .catch(error => {
        console.error(error);;
        userData = user;
      })

    window.fetch(
      'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/pets.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(petsJson => {
        petsData = JSON.stringify(petsJson);
      })
      .catch(error => {
        console.error(error);;
        petsData = pets;
      })
  }

  render() {
    console.log(userData)
    return (
      <Provider store={createStore(reducers)} className="App">
        <Layout
          pets={ petsData.length > 1 ? petsData : pets }
          user={ user }
        />
      </Provider>
    );
  }
}

export default App;
