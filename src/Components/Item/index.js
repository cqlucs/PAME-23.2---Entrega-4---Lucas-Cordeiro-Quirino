import React from "react";
import { ItemDiv, ItemImg } from "./styles";

function Item({nome, img, dimensoes, cor}) {
    return(
        <ItemDiv>
            <ItemImg src={img}></ItemImg>
            <p>{nome}</p>
            <p>Dim: {dimensoes[0]}x{dimensoes[1]}x{dimensoes[2]}cm</p>
            <p>Cor: {cor}</p>
        </ItemDiv>
    )
}

export default Item;