import React from 'react';
import { ButtonD } from './styles';

function ConButton ({text, funclick}) {
    return (
        <ButtonD onClick={funclick}>
            <span>{text}</span>
        </ButtonD>
    )
}

export default ConButton;