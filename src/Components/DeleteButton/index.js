import React from 'react';
import deleteimg from "../../Assets/deleteimg.png";
import { DelImg, DeleteBut } from './styles';

function DeleteButton ({funclick, nome}) {
    return (
        <DeleteBut onClick={() => funclick(nome)}><DelImg src={deleteimg}></DelImg></DeleteBut>
    )
}

export default DeleteButton;