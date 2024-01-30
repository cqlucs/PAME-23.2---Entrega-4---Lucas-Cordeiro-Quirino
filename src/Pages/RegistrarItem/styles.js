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
    min-width: 450px;
    height: 80%;
    background-color: #c89666;
    flex-direction: column;
    align-items: center;
    h1 {
        color: white;
        text-decoration: underline;
    }
    h2 {
        margin: 0;
        color: white;
    }
`