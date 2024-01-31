import React from "react";
import { Body, Container, LoginButton, Pages, StyledLink } from "./styles";
import Header from "../../Components/Header";
import Input from "../../Components/Input";

function Login() {
    return (
        <Pages>
            <Header isntLogin={false}></Header>
            <Body>
                <Container>
                    <h1>Login</h1>

                    <Input placeholder="Nome..." type="text"></Input>
                    <p>Esqueci minha senha!</p>
                    <Input placeholder="Senha..." type="password"></Input>
                    <StyledLink to="/Estoque">
                        <LoginButton>
                            <span>Login</span>
                        </LoginButton>
                    </StyledLink>
                </Container>
            </Body>
        </Pages>
    )
}

export default Login;