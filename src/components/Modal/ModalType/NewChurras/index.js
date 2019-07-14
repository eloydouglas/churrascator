import React from 'react'

import * as Styled from './styles';

const NewChurras = () => {
    return (<Styled.Container>
                <Styled.Title>Criar Churras</Styled.Title>
                <form onSubmit={e => {e.preventDefault()}}>
                    <Styled.InputContainer>
                        <Styled.Label>Quando?</Styled.Label>
                        <Styled.Date type="date"/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.Label>Descrição</Styled.Label>
                        <Styled.Input type="text"/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.Label>Observações adicionais</Styled.Label>
                        <Styled.TextArea/>
                    </Styled.InputContainer>
                    <Styled.SubmitButton>
                        Criar
                    </Styled.SubmitButton>
                </form>
            </Styled.Container>)
}

export default NewChurras;
