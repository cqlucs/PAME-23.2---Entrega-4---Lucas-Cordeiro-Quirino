import React from "react";
import { useState } from 'react';
import { Body, BodyReg, ButtonDiv, Container, ContainerReg, Pages, StyledLink, TitleDiv } from "./styles";
import Header from "../../Components/Header";
import ConButton from "../../Components/ConButton";
import Encomenda from "../../Components/Encomenda";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

function Encomendas() {
    //Booleano base para alternar entre tela de registro e de listagem
    const [registrando, setRegistrando] = useState(false);
    //Função para alterar esse booleano
    function alternarlistreg() {
        setRegistrando(!registrando);
    }

    // Armazenamos as encomendas em listas de listas, usando useState
    const [listaencomendas, setlistaencomendas] = useState([
        ["Lucas Cordeiro", "Rua que existe, 000", "Mesa", "R$299,00", 2],
        ["Alfredo James Pacino", "Hollywood, 100", "Estante", "R$499,00", 1]
      ]);


    //Variáveis e funções para registro de nova encomenda
    //Variáveis para adicionarmos uma nova encomenda
    const [nomecliente, setnomecliente] = useState("");
    const [enderecocliente, setenderecocliente] = useState("");
    const [valorenc, setvalorenc] = useState("");
    const [desc, setdesc] = useState("");
    const [status, setstatus] = useState(0);

    // Função para mudar os status da encomenda
    function produzindost() {
        setstatus(0);
        ststotext();
    }
    function paraenviost() {
        setstatus(1);
        ststotext();
    }
    function transportest() {
        setstatus(2);
        ststotext();
    }

    // Função para transformar status em texto
    const [statustexto, setstatustexto] = useState("Produzindo...");
    function ststotext() {
        if (status === 0) {
            setstatustexto("Produzindo...");
        }
        else if (status === 1) {
            setstatustexto("Para envio...");
        }
        else if (status === 2) {
            setstatustexto("Em transporte...");
        }
        else {
            setstatustexto("Erro!");
        }
    }

    let novaenc = [];
    // Função para registrar a nova encomenda
    function registarenc() {
        setnomecliente("");
        setenderecocliente("");
        setvalorenc("");
        setdesc("");
        novaenc = [nomecliente, enderecocliente, valorenc, desc, status];
        alert("Encomenda registrada com sucesso!");
    }

    return (
        <Pages>
            <Header isntLogin={true}></Header>
                {/* Tela de listagem */}
                {!registrando && 
                <Body>
                <Container>
                    <h1>Encomendas</h1>
                    <ConButton text="Registrar Encomenda" funclick={alternarlistreg}></ConButton>
                    {listaencomendas.map((enc) => {
                        return <Encomenda nome={enc[0]} endereco={enc[1]} desc={enc[2]} valor={enc[3]} status={enc[4]}></Encomenda>;
                    })}
                </Container>
                </Body>}

                {/* Tela de registro */}
                {registrando && 
                <BodyReg>
                <TitleDiv>
                    <h1>Encomendas</h1>
                    <Button text="Voltar" funclick={alternarlistreg}></Button>
                </TitleDiv>
                
                <ContainerReg>
                    <h1>Registrar Encomenda</h1>

                    <Input placeholder="Nome do cliente..." setvariavel={setnomecliente} value={nomecliente}></Input>
                    <Input placeholder="Endereço..." setvariavel={setenderecocliente} value={enderecocliente}></Input>
                    <Input placeholder="Valor..." setvariavel={setvalorenc} value={valorenc}></Input>
                    <Input placeholder="Descrição..." setvariavel={setdesc} value={desc}></Input>
                    <h2>Status:</h2>
                    <ButtonDiv>
                    <Button text="Produzindo..." funclick={produzindost}></Button>
                    <Button text="Para envio..." funclick={paraenviost}></Button>
                    <Button text="Em transporte..." funclick={transportest}></Button>
                    </ButtonDiv>
                    <p>Atual: {statustexto}</p>
                    <Button text="Registrar" funclick={registarenc}></Button>
                </ContainerReg>
            </BodyReg>}
        </Pages>
    )
}

export default Encomendas;