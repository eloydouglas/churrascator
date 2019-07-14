import React from 'react';
import { withRouter } from 'react-router-dom';

import * as Styled from './styles';

const ChurrasListItem = ({id, date, description, totalValue, totalInvited, guestList, selectChurras, history}) => {
    
    const handleClick = () => {
        selectChurras({date, description, totalValue, totalInvited, guestList});
        history.push(`/churras/${id}`);
    }

    return(    
        <Styled.Container onClick={()=>handleClick()}>
            <Styled.Date>{date}</Styled.Date>
            <Styled.Title>{description}</Styled.Title>
                <Styled.TotalInvited>
                    <Styled.ColoredPeople/>
                    {totalInvited}
                </Styled.TotalInvited>   
                <Styled.TotalValue>
                    <Styled.ColoredAttachMoney/>
                    R$ {totalValue}
                </Styled.TotalValue>
        </Styled.Container>)
};

export default withRouter(ChurrasListItem);
