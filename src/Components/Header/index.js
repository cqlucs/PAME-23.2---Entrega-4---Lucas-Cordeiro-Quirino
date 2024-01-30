import React from 'react';
import { ButtonDiv, HeaderDiv, StyledLink } from './styles';
import Button from '../Button';

function Header ({isntLogin}) {
    return (
        <HeaderDiv>
            <h1>Viviane|Móveis</h1>
            
            <ButtonDiv>
            <StyledLink to="/Estoque">
                {isntLogin && <Button text="Estoque"></Button>}
            </StyledLink>
            <StyledLink to="/Encomendas">
                {isntLogin && <Button text="Encomendas"></Button>}
            </StyledLink>
            <StyledLink to="/">
                {isntLogin && <Button text="Deslogar"></Button>}
            </StyledLink>
            </ButtonDiv>
        </HeaderDiv>
    )
}

export default Header;