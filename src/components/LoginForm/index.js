import React from 'react';
import {Link} from 'react-router-dom';

import { Container, Form, InputContainer, SubmitContainer, Label, Input, SubmitButton } from './styles';

const LoginForm = () => {

    // const [login, setLogin] = useState("");
    // const [password, setPassword] = useState("");

    return (<Container>
            <Form onSubmit={(e)=> e.preventDefault()}>
                <InputContainer>
                    <Label>Login</Label>
                        <Input
                            placeholder="email"
                            // onChange={(e) => {setLogin(e.target.value)}}
                        />
                </InputContainer>
                <InputContainer>
                    <Label>Senha</Label>
                        <Input
                            placeholder="senha"
                            // onChange={(e) => {setPassword(e.target.value)}}
                        />
                </InputContainer>
                <SubmitContainer>
                    <Link to="/churraslist">
                        <SubmitButton>
                            Entrar
                        </SubmitButton>
                    </Link>
                </SubmitContainer>
            </Form>
        </Container>)
};

export default LoginForm;