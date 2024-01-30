import React from 'react';
import { ButtonD } from './styles';

function Button ({text}) {
    return (
        <ButtonD>
            <span>{text}</span>
        </ButtonD>
    )
}

export default Button;