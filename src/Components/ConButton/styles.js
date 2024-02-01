import styled from "styled-components";

export const ButtonD = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vw;
    min-width: 60px;
    height: 5vh;
    background-color: #9b4c37;
    border: solid #cec9c5 3px;
    border-radius: 5px;

    cursor: pointer;

    span {
        color: #cec9c5;
    }

    &:hover {
        background-color: #c1a68d;
    }
`