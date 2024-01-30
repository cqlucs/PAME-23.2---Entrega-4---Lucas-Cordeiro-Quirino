import React from "react";
import { Body, Container, LoginButton, Pages } from "./styles";
import Header from "../../Components/Header";
import Input from "../../Components/Input";

function Login() {
    return (
        <Pages>
            <Header isntLogin={false}></Header>
            <Body>
                <Container>
                    <h1>Login</h1>

                    <Input placeholder="Email..."></Input>
                    <p>Esqueci minha senha!</p>
                    <Input placeholder="Senha..."></Input>
                    <LoginButton>
                        <span>Login</span>
                    </LoginButton>
                </Container>
            </Body>
        </Pages>
    )
}

export default Login;