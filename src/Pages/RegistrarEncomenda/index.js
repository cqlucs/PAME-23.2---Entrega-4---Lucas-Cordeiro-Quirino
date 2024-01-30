import React from "react";
import { Body, ButtonDiv, Container, Pages } from "./styles";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

function RegistrarEncomenda() {
    return (
        <Pages>
            <Header isntLogin={true}></Header>
            <Body>
                <h1>Encomendas</h1>
                <Container>
                    <h1>Registrar Encomenda</h1>

                    <Input placeholder="Nome do cliente..."></Input>
                    <Input placeholder="Endereço..."></Input>
                    <Input placeholder="Valor..."></Input>
                    <Input placeholder="Descrição..."></Input>
                    <h2>Status:</h2>
                    <ButtonDiv>
                    <Button text="Produzindo..."></Button>
                    <Button text="Para envio..."></Button>
                    <Button text="Em transporte..."></Button>
                    </ButtonDiv>
                    <Button text="Registrar"></Button>
                </Container>
            </Body>
        </Pages>
    )
}

export default RegistrarEncomenda;