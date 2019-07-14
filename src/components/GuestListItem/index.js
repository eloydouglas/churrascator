import React from 'react';

import * as Styled from './styles';

const ChurrasListItem = ({name, value, drinkIncluded}) => {
    return (
        <Styled.Container>
            <Styled.Name>{name}</Styled.Name>
            <Styled.Value>R$ {value}</Styled.Value>
        </Styled.Container>
    );
};

export default ChurrasListItem;
