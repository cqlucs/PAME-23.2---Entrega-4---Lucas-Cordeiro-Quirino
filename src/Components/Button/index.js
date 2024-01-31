import React from 'react';
import { ButtonD } from './styles';

function Button ({text, funclick}) {
    return (
        <ButtonD onClick={funclick}>
            <span>{text}</span>
        </ButtonD>
    )
}

export default Button;