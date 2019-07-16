import React from 'react';
import {connect} from 'react-redux';

import { removeGuest } from '../../store/actions/general';

import * as Styled from './styles';

const mapDispatchToProps = dispatch => ({
    removeGuest: guest => dispatch(removeGuest(guest))
});

const ChurrasListItem = ({_id, name, value, drinkIncluded, removeGuest}) => {
    return (
        <Styled.Container>
            <Styled.Name>{name}</Styled.Name>
            <Styled.ColoredDelete onClick={()=>removeGuest({_id, name, value, drinkIncluded})}/>
            <Styled.Value>R$ {value}</Styled.Value>
        </Styled.Container>
    );
};

export default connect(null, mapDispatchToProps)(ChurrasListItem);
