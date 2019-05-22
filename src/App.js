import React , {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';

import reducers from './reducers';
import Layout from './modules/Layout';

import pets from './data/pets';
import petContract from './data/petProfileContract'

let petsData = petContract;

class App extends Component {
  
  componentDidMount() {

    window.fetch(
      'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/pets.json',
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
    )
    .then(response => {
        return response.json();
    })
    .then(petsJson => {
      console.log(JSON.stringify(petsJson));
      petsData = JSON.stringify(petsJson);
    })
    .catch(error => {
      console.log('oiy')
      console.error(error);;
      petsData = pets;
    })
  }

  render() {
    console.log({pets})
    console.log({petsData})
    return (
      <Provider store={createStore(reducers)} className="App">
        <Layout 
          pets={ pets }
          // user={ user }
          // key={ key }
        />
      </Provider>
    );
  }
}

export default App;
