import React from 'react';
import { Button } from  '../styles/style';

const ButtonTop = props => (
    <div>
        <Button>
            {props.buttonLabel}
        </Button>
    </div>
)

export default ButtonTop;
