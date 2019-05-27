import React, {Component} from 'react';
import { connect } from 'react-redux';
import TextButton from './TextButton';
import { setModule } from '../actions/buttonActions';

class Footer extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e, moduleKey) {
        e.preventDefault();
        this.props.onPress(moduleKey);
    }

    render(){
        return (
            <div>
                <TextButton
                    name={"Search"}
                    onClick={(e) => this.handleClick(e, 'search')}
                />
                <TextButton
                    name={"Saved"}
                    onClick={(e) => this.handleClick(e, 'saved')}
                />
                <TextButton
                    name={"Settings"}
                    onClick={(e) => this.handleClick(e, 'settings')}
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
  onPress: (moduleKey) => dispatch(setModule(moduleKey)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);