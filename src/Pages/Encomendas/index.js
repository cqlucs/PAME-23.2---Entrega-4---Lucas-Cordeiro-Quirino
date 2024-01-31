import React from "react";
import { useState } from 'react';
import { Body, Container, Pages, StyledLink } from "./styles";
import Header from "../../Components/Header";
import ConButton from "../../Components/ConButton";
import Encomenda from "../../Components/Encomenda";

function Encomendas() {
    //Armazenamos as encomendas em listas de listas, usando useState
    const [listaencomendas, setlistaencomendas] = useState([
        ["Lucas Cordeiro", "Rua que existe, 000", "Mesa", "R$299,00", 2],
        ["Alfredo James Pacino", "Hollywood, 100", "Estante", "R$499,00", 1]
      ]);

    return (
        <Pages>
            <Header isntLogin={true}></Header>
            <Body>
                <Container>
                    <h1>Encomendas</h1>
                    <StyledLink to="/RegistrarEncomenda">
                    <ConButton text="Registrar Encomenda"></ConButton>
                    </StyledLink>
                    {listaencomendas.map((enc) => {
                        return <Encomenda nome={enc[0]} endereco={enc[1]} desc={enc[2]} valor={enc[3]} status={enc[4]}></Encomenda>;
                    })}
                </Container>
            </Body>
        </Pages>
    )
}

export default Encomendas;