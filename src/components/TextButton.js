import React from 'react';
import Button from '@material-ui/core/Button';

const TextButton = (props) => {
    const { variant, size, color, name, onClick } = props;
  return (
        <Button
            variant={variant}
            size={size}
            color={color}
            onClick={onClick}
        >
            { name }
        </Button>
    );
}

export default TextButton;