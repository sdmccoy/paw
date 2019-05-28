import React from 'react';
import Button from '@material-ui/core/Button';

const buttonStyles = {
  button: {
    margin: 2,
  },
}

const TextButton = (props) => {
    const { variant, size, color, name, onClick } = props;
  return (
        <Button
            variant={variant || ''}
            size={size || ''}
            color={color || ''}
            className={buttonStyles.button}
            onClick={onClick}
        >
            { name }
        </Button>
    );
}

export default TextButton;