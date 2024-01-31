import styled from "styled-components";

export const ItemDiv = styled.div`
    width: 20vw;
    height: 35vh;
    padding: 0;
    background-color: #c89666;
    border: solid #2d545e 2px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
        margin: 0;
        margin-left: 3px;
        color: #2d545e;
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