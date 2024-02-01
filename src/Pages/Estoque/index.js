import React from "react";
import { useState } from 'react';
import { Body, BodyReg, Container, ContainerReg, DimensionsDiv, ImageInputDiv, ItensDiv, Pages, TitleDiv } from "./styles";
import Header from "../../Components/Header";
import { StyledLink } from "./styles";
import ConButton from "../../Components/ConButton";
import Item from "../../Components/Item";
import Mesa from "../../Assets/mesa.png";
import Input from "../../Components/Input";
import InputFile from "../../Components/InputFile";
import DimInput from "../../Components/DimInput";
import Button from "../../Components/Button";

function Estoque() {
    //Booleano base para alternar entre tela de registro e de listagem
    const [registrando, setRegistrando] = useState(false);
    //Função para alterar esse booleano
    function alternarlistreg() {
        setRegistrando(!registrando);
    }

    // Usamos useState para armazenar corretamente os itens e depois editamos apropriadamente, 
    // os itens foram armazenados em listas de listas
    const [listaitens, setlistaitens] = useState([
        ["Mesa", Mesa, [50, 50, 50], "Marrom"],
        ["Mesa", Mesa, [50, 50, 50], "Marrom claro"]
    ]);

    //Variáveis para adicionar um item
    const [nomeitem, setnomeitem] = useState("");
    const [comp, setcomp] = useState("");
    const [larg, setlarg] = useState("");
    const [alt, setalt] = useState("");
    const [cor, setcor] = useState("");

    //Função para registrar itens
    function registraritem() {
        let novoitem = [nomeitem, Mesa, [comp, larg, alt], cor];
        setnomeitem("")
        setcomp("")
        setlarg("");
        setalt("");
        setcor("");
        alert("Item registrado com sucesso!");
        setlistaitens([...listaitens, novoitem]);
    }

    return (
        <Pages>
            <Header isntLogin={true}></Header>

            {/* Tela de listagem */}
            {!registrando && <Body>
                <Container>
                    <h1>Estoque</h1>
                    <ConButton text="Registrar Item" funclick={alternarlistreg}></ConButton>

                    <ItensDiv>
                        {listaitens.map((prod) => {
                            return <Item nome={prod[0]} img={prod[1]} dimensoes={prod[2]} cor={prod[3]}></Item>;
                        })}
                    </ItensDiv>
                </Container>
            </Body>}

            {/* Tela de registro */}
            {registrando && <BodyReg>
                <TitleDiv>
                    <h1>Estoque</h1>
                    <Button text="Voltar" funclick={alternarlistreg}></Button>
                </TitleDiv>
                <ContainerReg>
                    <h1>Registrar Item</h1>

                    <Input placeholder="Nome do item..." setvariavel={setnomeitem} value={nomeitem}></Input>

                    <ImageInputDiv>
                        <p>Imagem: </p>
                        <InputFile type="file"></InputFile>
                    </ImageInputDiv>

                    <h2>Dimensões:</h2>
                    
                    <DimensionsDiv>
                    <DimInput placeholder="Comprimento..." setvariavel={setcomp} value={comp}></DimInput>
                    <DimInput placeholder="Largura..." setvariavel={setlarg} value={larg}></DimInput>
                    <DimInput placeholder="Altura..." setvariavel={setalt} value={alt}></DimInput>
                    </DimensionsDiv>
                    
                    <Input placeholder="Cor..." setvariavel={setcor} value={cor}></Input>

                    <Button text="Registrar" funclick={registraritem}></Button>
                </ContainerReg>
            </BodyReg>}

        </Pages>
    )
}

export default Estoque;