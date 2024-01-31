import React from "react";
import { useState } from 'react';
import { Body, Container, DimensionsDiv, ImageInputDiv, Pages, StyledLink } from "./styles";
import Header from "../../Components/Header";
import DimInput from "../../Components/DimInput";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import InputFile from "../../Components/InputFile";

function RegistrarItem() {
    //Variáveis para adicionar um item
    const [nomeitem, setnomeitem] = useState("");
    const [comp, setcomp] = useState("");
    const [larg, setlarg] = useState("");
    const [alt, setalt] = useState("");
    const [cor, setcor] = useState("");

    return (
        <Pages>
            <Header isntLogin={true}></Header>
            <Body>
                <h1>Estoque</h1>
                <Container>
                    <h1>Registrar Item</h1>

                    <Input placeholder="Nome do item..." setvariavel={setnomeitem}></Input>

                    <ImageInputDiv>
                        <p>Imagem: </p>
                        <InputFile type="file"></InputFile>
                    </ImageInputDiv>

                    <h2>Dimensões:</h2>
                    
                    <DimensionsDiv>
                    <DimInput placeholder="Comprimento..." setvariavel={setcomp}></DimInput>
                    <DimInput placeholder="Largura..." setvariavel={setlarg}></DimInput>
                    <DimInput placeholder="Altura..." setvariavel={setalt}></DimInput>
                    </DimensionsDiv>
                    
                    <Input placeholder="Cor..." setvariavel={setcor}></Input>

                    <StyledLink to="/Estoque">
                        <Button text="Registrar"></Button>
                    </StyledLink>
                </Container>
            </Body>
        </Pages>
    )
}

export default RegistrarItem;