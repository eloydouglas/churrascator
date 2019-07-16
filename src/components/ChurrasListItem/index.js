import React from 'react';
import { withRouter } from 'react-router-dom';

import * as Styled from './styles';

const ChurrasListItem = ({selectChurras, history, ...churras}) => {
    
    const handleClick = () => {
        selectChurras(churras);
        history.push(`/churras/${churras._id}`);
    }

    return(    
        <Styled.Container onClick={()=>handleClick()}>
            <Styled.Date>{churras.date}</Styled.Date>
            <Styled.Title>{churras.description}</Styled.Title>
                <Styled.TotalInvited>
                    <Styled.ColoredPeople/>
                    {churras.totalGuests}
                </Styled.TotalInvited>   
                <Styled.TotalValue>
                    <Styled.ColoredAttachMoney/>
                    R${churras.totalValue}
                </Styled.TotalValue>
        </Styled.Container>)
};

export default withRouter(ChurrasListItem);
