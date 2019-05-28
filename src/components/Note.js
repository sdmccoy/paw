import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    padding: 3,
  },
}

const Note = (props) => {
    const { message, classes } = props;
  
    return (
        <div>
        <Paper className={classes.root}>
            <Typography component="p">
            { message }
            </Typography>
        </Paper>
        </div>
    );
}

export default withStyles(styles)(Note);
