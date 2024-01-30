import React from 'react';
import { ButtonDiv, HeaderDiv } from './styles';
import Button from '../Button';

function Header ({isntLogin}) {
    return (
        <HeaderDiv>
            <h1>Viviane|Móveis</h1>

            <ButtonDiv>
            {isntLogin && <Button text="Estoque"></Button>}
            {isntLogin && <Button text="Encomendas"></Button>}
            </ButtonDiv>
        </HeaderDiv>
    )
}

export default Header;