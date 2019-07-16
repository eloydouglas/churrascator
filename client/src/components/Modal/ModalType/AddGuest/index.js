import React, {useState} from 'react'
import {connect} from 'react-redux';

import {addGuest} from '../../../../store/actions/churras';

import * as Styled from './styles';


const mapDispatchToProps = dispatch => ({
    addGuest: guest => dispatch(addGuest(guest))
});


const AddGuest = ({addGuest}) => {
    const [ name, setName ] = useState("");
    const [ value, setValue ] = useState(0);
    const [ drinkIncluded, setDrink ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        addGuest({name, value, drinkIncluded});
    };


    return (
        <Styled.Container>
            <Styled.Title>Adicionar Convidado</Styled.Title>
            <form onSubmit={e => {handleSubmit(e)}}>
                    <Styled.InputContainer>
                        <Styled.Label>Nome</Styled.Label>
                        <Styled.Input required type="text" onChange={e => {setName(e.target.value)}}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.Label>Valor sugerido</Styled.Label>
                        <Styled.Input
                            width="35vw"
                            required
                            type="number"
                            min="0"
                            step=".01"
                            onChange={e => { setValue(e.target.value)}}/>(R$)
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.Label>Bebida incluída?</Styled.Label>
                        <Styled.Checkbox type="checkbox" onChange={e => { setDrink(e.target.checked)}}/>
                    </Styled.InputContainer>
                    <Styled.SubmitButton>
                        Adicionar
                    </Styled.SubmitButton>
                </form>
        </Styled.Container>);
};

export default connect(null, mapDispatchToProps)(AddGuest);
