import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import * as Styled from './styles';
import ChurrasListItem from '../../components/ChurrasListItem';
import BackButton from '../../components/BackButton';
import { setChurras, fetchChurraslist } from '../../store/actions/churras';
import { showModal } from '../../store/actions/general';

const mapStateToProps = state => ({
  churrasList: state.churras.churrasList,
  shouldUpdateList: state.churras.shouldUpdateList
});

const mapDispatchToProps = dispatch => ({
  selectChurras: churras => dispatch(setChurras(churras)),
  newChurras: () => dispatch(showModal('newChurras')),
  fetchChurraslist: () => dispatch(fetchChurraslist())
});

const ChurrasList = ({churrasList, shouldUpdateList, selectChurras, newChurras, fetchChurraslist}) => {

  useEffect(()=> {
    if(!churrasList || shouldUpdateList){
      fetchChurraslist();
    };
  },[churrasList, shouldUpdateList]);

  return (
    <Styled.Container>
      <BackButton/>
      <Styled.ChurrasListBox>
        {churrasList && churrasList.map(churras => (
          <ChurrasListItem
            key={churras._id}
            selectChurras={selectChurras}
            {...churras}
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