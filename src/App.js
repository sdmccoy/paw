import React , {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';

import reducers from './reducers';
import ModuleContainer from './modules/ModuleContainer';
import Footer from './components/Footer';

import pets from './data/pets';
import petContract from './data/petProfileContract'

let petsData = petContract;

class App extends Component {
  
  componentDidMount() {

    fetch(
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
      petsData = JSON.stringify(petsJson) || petsData;
    })
    .catch(error => {
      console.error(error);;
      petsData = pets || petsData;
    })
  }

  render() {
    console.log(petsData)
    return (
      <Provider store={createStore(reducers)} className="App">
        <ModuleContainer 
          pets={ petsData }
          // user={ user }
          // key={ key }
        />
        <Footer />
      </Provider>
    );
  }
}

export default App;
