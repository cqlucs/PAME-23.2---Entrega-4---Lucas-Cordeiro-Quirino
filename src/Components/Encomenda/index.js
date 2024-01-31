import React from 'react';
import { ButtonD, Info } from './styles';
import DeleteButton from '../DeleteButton';

function Encomenda ({nome, endereco, desc, valor, status}) {
    // Definir texto que aparecerá nos status
    let statustext = "";
    if (status === 0) {
        statustext = "Em produção";
    }
    else if (status === 1) {
        statustext = "Em envio";
    }
    else if (status === 2) {
        statustext = "Em transporte";
    }
    else if (status === 3) {
        statustext = "Recebido";
    }
    else {
        statustext = "Erro";
    }

    // Para verificar se o produto já esta em transporte ou passou dessa fase e pode ser deletado
    let deleteavailable = false;
    if (status >= 2) {
        deleteavailable = true;
    }

    return (
        <ButtonD>
            <span>
            <Info>Nome: {nome}</Info>
            <Info>Endereço: {endereco}</Info>
            <Info>Descrição: {desc}</Info>
            <Info>Valor: {valor}</Info>
            <Info>Status: {statustext}</Info>
            </span>
            {deleteavailable && <DeleteButton></DeleteButton>}
        </ButtonD>
    )
}

export default Encomenda;