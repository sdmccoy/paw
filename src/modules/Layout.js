import React, { Component } from 'react';
import { connect } from 'react-redux';
import { petListSet } from '../actions/searchActions';
import { userSettingsSet } from '../actions/settingsActions';
import ModuleContainer from './ModuleContainer';
import Footer from '../components/Footer';

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log('hey', this.props)
    this.props.setPetList(this.props.pets);
    this.props.setUserSettings(this.props.user);
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <ModuleContainer />
        <Footer />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
  setPetList: (pets) => dispatch(petListSet(pets)),
  setUserSettings: (user) => dispatch(userSettingsSet(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
