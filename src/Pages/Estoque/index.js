import React from "react";
import { Body, Container, ItensDiv, Pages } from "./styles";
import Header from "../../Components/Header";
import { StyledLink } from "./styles";
import ConButton from "../../Components/ConButton";
import Item from "../../Components/Item";
import Mesa from "../../Assets/mesa.png";

function Estoque() {
    return (
        <Pages>
            <Header isntLogin={true}></Header>
            <Body>
                <Container>
                    <h1>Estoque</h1>
                    <StyledLink to="/RegistrarItem">
                    <ConButton text="Registrar Item"></ConButton>
                    </StyledLink>

                    <ItensDiv>
                        <Item nome="Mesa" img={Mesa} dimensoes={[50, 50, 50]} cor="Marrom"></Item>
                    </ItensDiv>
                </Container>
            </Body>
        </Pages>
    )
}

export default Estoque;