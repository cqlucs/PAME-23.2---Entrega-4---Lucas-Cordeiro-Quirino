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
    width: 100vw;
    height: 80%;

    flex-direction: column;
    h1 {
        margin-top: 0;
        margin-bottom: 20px;
        color: white;
        text-decoration: underline;
    }
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
        margin-top: 15px;
        color: white;
        text-decoration: underline;
    }
    h2 {
        margin: 0;
        color: white;
    }
`

export const DimensionsDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 20px;
`

export const ImageInputDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    gap: 20px;
    p {
        font-size: 14px;
        color: white;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    margin: auto 0;
`