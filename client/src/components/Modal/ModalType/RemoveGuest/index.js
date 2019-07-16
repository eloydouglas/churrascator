import React, {useState} from 'react'
import {connect} from 'react-redux';

import {deleteGuest} from '../../../../store/actions/churras';
import {dismissModal} from '../../../../store/actions/general';

import * as Styled from './styles';


const mapDispatchToProps = dispatch => ({
    deleteGuest: guestId => dispatch(deleteGuest(guestId)),
    cancel: () => dispatch(dismissModal())
});


const RemoveGuest = ({guest, deleteGuest, cancel}) => {

    const [disabledButton, setDisable] = useState(false);

    return (
        <Styled.Container>
            <Styled.Title>Remover Convidado</Styled.Title>
                <Styled.TextContainer>
                    Remover { guest.name }?
                </Styled.TextContainer>
                <Styled.DeleteButton disabled={disabledButton} onClick={()=>{setDisable(true);deleteGuest(guest)}}>
                    Remover
                </Styled.DeleteButton>
                <Styled.CancelButton disabled={disabledButton} onClick={()=>cancel()}>
                    Cancelar
                </Styled.CancelButton>
        </Styled.Container>);
};

export default connect(null, mapDispatchToProps)(RemoveGuest);
