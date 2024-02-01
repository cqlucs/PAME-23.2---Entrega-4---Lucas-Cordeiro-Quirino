import { Link } from "react-router-dom";
import styled from "styled-components";

export const Pages = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color:#c1a68d;
    flex-direction: column;
`

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80%;

    flex-direction: column;
`
export const Container = styled.div`
    display: flex;
    width: 40%;
    max-width: 450px;
    min-width: 250px;
    height: 80%;
    background-color: #9b4c37;
    flex-direction: column;
    align-items: center;
    h1 {
        color: #cec9c5;
        margin-bottom: auto;
    }
    p {
        color: #b5b0ac;
        text-decoration: underline;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0;
        margin-bottom: 0;
    }
`

export const LoginButton = styled.button`
    width: 10vw;
    min-width: 60px;
    height: 6vh;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: solid #cec9c5 3px;
    background-color: #9b4c37;
    cursor: pointer;
    span {
        color: #cec9c5;
    }
    &:hover {
        background-color: #c1a68d;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    margin: auto 0;
`