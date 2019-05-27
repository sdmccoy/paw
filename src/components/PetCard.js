import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
};

function PetCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { `${ props.name }, ${ props.age }yr, ${ props.sex }` }
          </Typography>
          <Typography component="p">
            { props.profile }
          </Typography>
        </CardContent>
    </Card>
  );
}

PetCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PetCard);