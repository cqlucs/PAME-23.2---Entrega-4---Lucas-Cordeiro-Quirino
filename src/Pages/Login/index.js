import React from "react";
import { useState } from 'react';
import { Body, Container, LoginButton, Pages, StyledLink } from "./styles";
import Header from "../../Components/Header";
import Input from "../../Components/Input";

function Login() {
    // Para receber dados de login
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    return (
        <Pages>
            <Header isntLogin={false}></Header>
            <Body>
                <Container>
                    <h1>Login</h1>

                    <Input placeholder="Nome..." type="text" setvariavel={setusername} value={username}></Input>
                    
                    <Input placeholder="Senha..." type="password" setvariavel={setpassword} value={password}></Input>
                    <p>Esqueci minha senha!</p>
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