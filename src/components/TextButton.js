import React from 'react';
import Button from '@material-ui/core/Button';

const buttonStyles = {
  button: {
    margin: 2,
  },
}

const TextButton = ({onClick, name}) => {

  return (
        <Button 
            className={buttonStyles.button}
            onClick={onClick}
        >
            { name }
        </Button>
    );
}

export default TextButton;