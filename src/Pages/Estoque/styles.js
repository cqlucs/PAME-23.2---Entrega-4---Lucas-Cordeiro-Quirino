import { Link } from "react-router-dom";
import styled from "styled-components";

export const Pages = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #e1b382;
    flex-direction: column;
`

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    flex-direction: column;
`
export const Container = styled.div`
    display: flex;
    width: 80%;
    height: 100%;
    flex-direction: column;
    align-items: center;

    h1 {
        color: white;
        text-decoration: underline;
        font-size: 26px;
    }
`


export const ItensDiv = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-around;
    align-items: center;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 0;
`