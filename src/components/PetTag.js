import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
});
  
const PetTag = (props) => {
    const { classes, pet } = props;

    return(
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt={pet.name} src={pet.img} />
                </ListItemAvatar>
                <ListItemText primary={pet.name} secondary={pet.profile} />
            </ListItem>
        </List>
    )
}

export default withStyles(styles)(PetTag);