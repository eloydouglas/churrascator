import React from 'react';
import {withRouter} from 'react-router-dom';

import * as Styled from './styles';

const BackButton = ({history}) => {
  return (
    <Styled.Container>
        <Styled.Button onClick={()=>history.goBack()}>
            Voltar
        </Styled.Button>
    </Styled.Container>
  );
}

export default withRouter(BackButton);
