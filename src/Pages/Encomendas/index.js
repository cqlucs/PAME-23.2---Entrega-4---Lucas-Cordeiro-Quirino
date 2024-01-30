import React from "react";
import { Body, Container, Pages, StyledLink } from "./styles";
import Header from "../../Components/Header";
import ConButton from "../../Components/ConButton";
import Encomenda from "../../Components/Encomenda";

function Encomendas() {
    return (
        <Pages>
            <Header isntLogin={true}></Header>
            <Body>
                <Container>
                    <h1>Encomendas</h1>
                    <StyledLink to="/RegistrarEncomenda">
                    <ConButton text="Registrar Encomenda"></ConButton>
                    </StyledLink>
                    <Encomenda nome="Lucas Cordeiro" endereco="Rua que existe, 000" desc="Mesa" valor="R$299,00" status={2}></Encomenda>
                </Container>
            </Body>
        </Pages>
    )
}

export default Encomendas;