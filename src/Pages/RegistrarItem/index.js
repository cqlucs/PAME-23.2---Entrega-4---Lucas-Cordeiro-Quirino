import React from "react";
import { Body, Container, DimensionsDiv, Pages } from "./styles";
import Header from "../../Components/Header";
import DimInput from "../../Components/DimInput";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

function RegistrarItem() {
    return (
        <Pages>
            <Header isntLogin={true}></Header>
            <Body>
                <h1>Estoque</h1>
                <Container>
                    <h1>Registrar Item</h1>

                    <Input placeholder="Nome do item..."></Input>
                    <h2>Dimensões:</h2>
                    
                    <DimensionsDiv>
                    <DimInput placeholder="Comprimento..."></DimInput>
                    <DimInput placeholder="Largura..."></DimInput>
                    <DimInput placeholder="Altura..."></DimInput>
                    </DimensionsDiv>
                    
                    <Input placeholder="Cor..."></Input>

                    <Button text="Registrar"></Button>
                </Container>
            </Body>
        </Pages>
    )
}

export default RegistrarItem;