import React from 'react';
import * as Styled from './styles';
import LoginForm from '../../components/LoginForm';

const Login = () =>(
    <Styled.Container>
        <Styled.LoginFormBox>
            <LoginForm/>
        </Styled.LoginFormBox>
    </Styled.Container>
);

export default Login;
