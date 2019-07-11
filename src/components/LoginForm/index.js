import React from 'react';

import { Container, Form, InputContainer, SubmitContainer, Label, Input, SubmitButton } from './styles';

const LoginForm = () => (
    <Container>
        <Form onSubmit={(e)=> e.preventDefault()}>
            <InputContainer>
                <Label>Login</Label>
                    <Input
                        placeholder="email"
                    />
            </InputContainer>
            <InputContainer>
                <Label>Senha</Label>
                    <Input
                        placeholder="senha"
                    />
            </InputContainer>
            <SubmitContainer>
                <SubmitButton>
                    Entrar
                </SubmitButton>
            </SubmitContainer>
        </Form>
    </Container>
);

export default LoginForm;