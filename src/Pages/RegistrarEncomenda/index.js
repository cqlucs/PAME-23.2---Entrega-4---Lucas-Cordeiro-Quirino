import React from "react";
import { useState } from 'react';
import { Body, ButtonDiv, Container, Pages, StyledLink } from "./styles";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

function RegistrarEncomenda() {
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
    // Função para registrar a encomenda
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
            <Body>
                <h1>Encomendas</h1>
                <Container>
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
                    <StyledLink to="/Encomendas">
                        <Button text="Registrar" funclick={registarenc}></Button>
                    </StyledLink>
                </Container>
            </Body>
        </Pages>
    )
}

export default RegistrarEncomenda;