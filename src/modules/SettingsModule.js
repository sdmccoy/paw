import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    h4: {
        display: 'inline',
        margin: 10,
    }
});

class SettingsModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggledSpecies: true,
            max: 0,
            min: 0,
        };
    }

    handleChange = event => {
console.log(event.target.name, event.target.value)
        this.setState({ [event.target.name]: event.target.value });
    };

    handleToggle = name => event => {
        console.log({name}, event.target)
        this.setState({ [name]: event.target.checked });
    };

    render() {
        console.log('settings = ', this.props)
        console.log(this.state)
        return (
            <div>
                <Paper className={this.props.classes.root} elevation={1}>
                    <form>
                        <div>
                            <h2>Adopter Profile</h2>
                            <textarea>hey</textarea>
                        </div>
                        <div>
                            <h4 className={this.props.classes.h4}>Animal: </h4>
                            <label>Cat</label>
                            <Switch
                                checked={this.state.toggledSpecies}
                                onChange={this.handleToggle('toggledSpecies')}
                                value="toggledSpecies"
                                color="default"
                            />
                            <label>Dog</label>
                        </div>
                        <div>
                            <h4 className={this.props.classes.h4}>Age: </h4>
                            <input 
                                type='number'
                                name='min'
                                min={0}
                                placeholder='min'
                                value={this.state.min}
                                onChange={this.handleChange}
                            />
                            <input 
                                type='number'
                                name='max'
                                min={0}
                                placeholder='max'
                                value={this.state.max}
                                onChange={this.handleChange}
                            />
                        </div>
                    </form>
                </Paper>
            </div>
        )
    }
}
//map the pet list state to this module props
let mapStateToProps = (state) => ({
    userSettings: state.settings
});

let mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SettingsModule));