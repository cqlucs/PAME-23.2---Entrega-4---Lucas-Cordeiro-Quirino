import { Link } from "react-router-dom";
import styled from "styled-components";

export const Pages = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #c1a68d;
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
export const BodyReg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80%;

    flex-direction: column;
    h1 {
        margin-top: 0;
        margin-bottom: 20px;
        color: #9b4c37;
        text-decoration: underline;
    }
`

export const Container = styled.div`
    display: flex;
    width: 80%;
    height: 100%;
    flex-direction: column;
    align-items: center;

    h1 {
        color: #9b4c37;
        text-decoration: underline;
        font-size: 26px;
    }
`
export const ContainerReg = styled.div`
    display: flex;
    width: 40%;
    min-width: 250px;
    height: 80%;
    background-color: #9b4c37;
    flex-direction: column;
    align-items: center;
    h1 {
        margin-top: 15px;
        color: #cec9c5;
        text-decoration: underline;
    }
    h2 {
        margin: 0;
        color: #cec9c5;
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
        color: #cec9c5;
    }
`

export const TitleDiv = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 10px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 0;
`