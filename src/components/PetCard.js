import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { `${ props.name }, ${ props.age }yr, ${ props.sex }` }
          </Typography>
          <Typography component="p">
            { props.profile }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="secondary">
          Not now
        </Button>
        <Button variant='contained' size="small" color="primary">
          Pawsible
        </Button>
      </CardActions>
    </Card>
  );
}

PetCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PetCard);