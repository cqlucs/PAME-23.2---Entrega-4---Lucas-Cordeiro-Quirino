import styled from "styled-components";

export const ButtonD = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6vw;
    min-width: 85px;
    height: 5vh;
    background-color: #9b4c37;
    border: solid #cec9c5 3px;
    border-radius: 5px;
    font-size: 13px;

    @media (max-width: 550px) {
        min-width: 60px;
        font-size: 10px;
    }

    cursor: pointer;

    span {
        color: #cec9c5;
    }

    &:hover {
        background-color: #c1a68d;
    }
`