import React from 'react';
import deleteimg from "../../Assets/deleteimg.png";
import { DelImg, DeleteBut } from './styles';

function DeleteButton () {
    return (
        <DeleteBut><DelImg src={deleteimg}></DelImg></DeleteBut>
    )
}

export default DeleteButton;