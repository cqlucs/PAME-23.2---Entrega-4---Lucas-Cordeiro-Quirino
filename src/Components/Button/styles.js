import styled from "styled-components";

export const ButtonD = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6vw;
    min-width: 85px;
    height: 5vh;
    background-color: #c89666;
    border: solid #2d545e 3px;
    border-radius: 5px;
    font-size: 13px;

    @media (max-width: 550px) {
        min-width: 60px;
        font-size: 10px;
    }

    cursor: pointer;

    span {
        color: #2d545e;
    }

    &:hover {
        background-color: #e1b382;
    }
`