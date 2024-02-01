import styled from "styled-components";

export const ItemDiv = styled.div`
    width: 20vw;
    height: 35vh;
    padding: 0;
    background-color: #9b4c37;
    border: solid #cec9c5 2px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
        margin: 0;
        margin-left: 3px;
        color: #cec9c5;
        font-size: 20px;
    }

    @media (max-width: 520px) {
        width: 50vw;
    }
`

export const ItemImg = styled.img`
    width: 60%;
    margin: 0 auto;
`