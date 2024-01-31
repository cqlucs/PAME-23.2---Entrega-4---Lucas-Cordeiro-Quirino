import React from "react";
import { useState } from 'react';
import { Body, Container, ItensDiv, Pages } from "./styles";
import Header from "../../Components/Header";
import { StyledLink } from "./styles";
import ConButton from "../../Components/ConButton";
import Item from "../../Components/Item";
import Mesa from "../../Assets/mesa.png";

function Estoque() {
    // Usamos useState para armazenar corretamente os itens e depois editamos apropriadamente, 
    // os itens foram armazenados em listas de listas
  const [listaitens, setlistaitens] = useState([
    ["Mesa", Mesa, [50, 50, 50], "Marrom"],
    ["Mesa", Mesa, [50, 50, 50], "Marrom claro"]
  ]);

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
                        {listaitens.map((prod) => {
                            return <Item nome={prod[0]} img={prod[1]} dimensoes={prod[2]} cor={prod[3]}></Item>;
                        })}
                    </ItensDiv>
                </Container>
            </Body>
        </Pages>
    )
}

export default Estoque;