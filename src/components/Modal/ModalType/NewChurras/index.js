import React,{useState} from 'react'
import {connect} from 'react-redux';

import {createChurras} from '../../../../store/actions/churras';

import * as Styled from './styles';

const mapDispatchToProps = dispatch => ({
    createChurras: churras => dispatch(createChurras(churras))
});

const NewChurras = ({createChurras}) => {
    const [ description, setDescription ] = useState("");
    const [ note, setNote ] = useState("");
    const [ date, setDate ] = useState("");

    const today = () => {

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formattedDate = date.split("-");
        formattedDate =`${formattedDate[2]}/${formattedDate[1]}/${formattedDate[0]}`;

        createChurras({
            date: formattedDate,
            description,
            note
        })

    };

    return (<Styled.Container>
                <Styled.Title>Criar Churras</Styled.Title>
                <form onSubmit={e => {handleSubmit(e)}}>
                    <Styled.InputContainer>
                        <Styled.Label>Quando?</Styled.Label>
                        <Styled.Date required type="date" onChange={e=>{setDate(e.target.value)}}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.Label>Descrição</Styled.Label>
                        <Styled.Input required type="text" onChange={e=>{setDescription(e.target.value)}}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.Label>Observações adicionais</Styled.Label>
                        <Styled.TextArea onChange={e=>{setNote(e.target.value)}}/>
                    </Styled.InputContainer>
                    <Styled.SubmitButton>
                        Criar
                    </Styled.SubmitButton>
                </form>
            </Styled.Container>)
}

export default connect(null, mapDispatchToProps)(NewChurras);