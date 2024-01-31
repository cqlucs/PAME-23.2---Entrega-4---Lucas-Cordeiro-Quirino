import { Link } from "react-router-dom";
import styled from "styled-components";

export const Pages = styled.div`
    display: flex;
    width: 100vw;
    /* min-width: 520px; */
    height: 100vh;
    background-color: #e1b382;
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
    min-width: 250px;
    height: 80%;
    background-color: #c89666;
    flex-direction: column;
    align-items: center;
    h1 {
        color: white;
        margin-bottom: auto;
    }
    p {
        color: #12343b;
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
    border: solid #2d545e 3px;
    background-color: #c89666;
    cursor: pointer;
    span {
        color: #2d545e;
    }
    &:hover {
        background-color: #e1b382;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    margin: auto 0;
`