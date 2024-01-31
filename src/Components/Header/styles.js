import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderDiv = styled.div`
    width: 100%;
    height: 12vh;
    background-color: #c89666;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    h1 {
        font-size: 40px;
        margin-left: 10px;
        color: white;
        @media (max-width: 560px) {
            font-size: 20px;
        }
    }
`

export const ButtonDiv = styled.div`
    display: flex;
    gap: 10px;
    margin-right: 10px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
`