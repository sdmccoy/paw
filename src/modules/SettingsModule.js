import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import TextButton from '../components/TextButton';
import { userSettingsSave } from '../actions/settingsActions';

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
            toggledSpecies: typeof this.props.userSettings.toggledSpecies === 'undefined' ? false : this.props.userSettings.toggledSpecies,
            id: this.props.userSettings.id || 0,
            typePreference: this.props.userSettings.typePreference || 'dog',
            profile: this.props.userSettings.profile || '',
            max: this.props.userSettings.ageRange.max || 0,
            min: this.props.userSettings.ageRange.min || 0,
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleToggle = name => event => {
        const species = event.target.checked ? 'dog' : 'cat';
        this.setState({ [name]: event.target.checked })
        this.setState({ typePreference: species });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveProfile(this.state)
    }

    render() {
        return (
            <div>
                <Paper className={this.props.classes.root} elevation={1}>
                    <form>
                        <div>
                            <h2>Adopter Profile</h2>
                            <textarea 
                                type='text'
                                name='profile'
                                placeholder='About me'
                                value={this.state.profile}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <h4 className={this.props.classes.h4}>Animal: </h4>
                            <label>Cat</label>
                            <Switch
                                checked={this.state.toggledSpecies}
                                onChange={this.handleToggle('toggledSpecies')}
                                value={this.state.typePreference}
                                color='default'
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
                        <TextButton
                            variant='outlined'
                            color='primary'
                            size='medium'
                            name='Save'
                            onClick={this.handleSubmit.bind(this)}
                        />
                    </form>
                </Paper>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    userSettings: state.settings
});

let mapDispatchToProps = (dispatch) => ({
    saveProfile: (profile) => dispatch(userSettingsSave(profile))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SettingsModule));