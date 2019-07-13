import React from 'react';

import * as Styled from './styles';

const ChurrasListItem = ({ date, title, totalValue }) => {
    return(    
        <Styled.Container>
            <Styled.Date>{date}</Styled.Date>
            <Styled.Title>{title}</Styled.Title>
            <Styled.InfoContainer>
                <Styled.TotalValue>12</Styled.TotalValue>
                <Styled.TotalInvited>R$ 150</Styled.TotalInvited>
            </Styled.InfoContainer>
        </Styled.Container>)
};

export default ChurrasListItem;
