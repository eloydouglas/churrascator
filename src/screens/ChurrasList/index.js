import React from 'react';

import * as Styled from './styles';
import ChurrasItem from '../../components/ChurrasListItem';

export default function ChurrasList() {
  return (
    <Styled.Container>
      <Styled.ChurrasListBox>
        <ChurrasItem date="22/02" title="Teste1"/>
        <ChurrasItem date="24/02" title="Teste2"/>
        <ChurrasItem date="25/02" title="Teste3"/>
        <ChurrasItem date="25/02" title="Teste3"/>
        <ChurrasItem date="25/02" title="Teste3"/>
        <ChurrasItem date="25/02" title="Teste3"/>
      </Styled.ChurrasListBox>
    </Styled.Container>
  );
}
