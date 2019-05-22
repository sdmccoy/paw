import React , {Component} from 'react';
import { connect } from 'react-redux';
import { petListSet } from '../actions/searchActions';
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
  }

  render() {
      console.log(this.props)
    return (
      <div className="App">
        <ModuleContainer 
          pets={ this.props.pets }
          // user={ user }
          // key={ key }
        />
        <Footer />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
  setPetList: (pets) => dispatch(petListSet(pets)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
