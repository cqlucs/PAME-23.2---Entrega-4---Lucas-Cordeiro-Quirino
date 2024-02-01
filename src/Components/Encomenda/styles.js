import styled from "styled-components";

export const ButtonD = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80vw;
    min-width: 60px;
    height: 10vh;
    background-color: #9b4c37;
    border: solid #cec9c5 3px;
    border-radius: 5px;
    margin-top: 10px;

    @media (max-width: 500px) {
        min-height: 120px;
    }

    span {
        color: #cec9c5;
    }

    &:hover {
        background-color: #c1a68d;
    }
`

export const Info = styled.p`
    display: inline;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    padding-right: 1vw;
    padding-left: 1vw;

    @media (max-width: 500px) {
        font-size: 18px;
        display: block;
    }
`