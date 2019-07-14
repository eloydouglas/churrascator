import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import * as Styled from './styles';
import ChurrasListItem from '../../components/ChurrasListItem';
import { setChurras } from '../../store/actions/churras';
import { showModal } from '../../store/actions/general';

const mapStateToProps = state => ({
  churrasList:state.churras.churrasList
});

const mapDispatchToProps = dispatch => ({
  selectChurras: churras => dispatch(setChurras(churras)),
  newChurras: () => dispatch(showModal('newChurras'))
});

const ChurrasList = ({churrasList, selectChurras, newChurras}) => {

  useEffect(()=>{

  },[]);

  return (
    <Styled.Container>
      <Styled.ChurrasListBox>
        {churrasList && churrasList.map(churras => (
          <ChurrasListItem
            id={churras._id}
            key={churras._id}
            date={churras.date}
            description={churras.description}
            totalValue={churras.totalValue}
            totalInvited={churras.totalInvited}
            guestList={churras.guestList}
            selectChurras={selectChurras}
          />
        ))}
        <Styled.AddButtonContainer onClick={()=>newChurras()}>
          <Styled.ColoredAdd/>
          Criar Churras
        </Styled.AddButtonContainer>
      </Styled.ChurrasListBox>
    </Styled.Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChurrasList);