import styled from "styled-components";

export const ButtonD = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80vw;
    min-width: 60px;
    height: 10vh;
    background-color: #c89666;
    border: solid #2d545e 3px;
    border-radius: 5px;
    margin-top: 10px;

    cursor: pointer;

    span {
        color: #2d545e;
    }

    &:hover {
        background-color: #e1b382;
    }
`

export const Info = styled.p`
    display: inline;
    font-size: 20px;
    padding-right: 1vw;
    padding-left: 1vw;
`