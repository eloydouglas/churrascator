import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';

import * as Styled from './styles';
import GuestListItem from '../../components/GuestListItem'
import BackButton from '../../components/BackButton';
import { getChurras } from '../../store/actions/churras';
import { showModal } from '../../store/actions/general';

const mapStateToProps = state => ({
  selectedChurras: state.churras.selectedChurras
});

const mapDispatchToProps = dispatch => ({
  getChurras: churrasId => dispatch(getChurras(churrasId)),
  addGuest: () => dispatch(showModal('addGuest')),
});

const Churras = ({match, selectedChurras, getChurras, addGuest}) => {

  const [ churras, setChurras ] = useState(null);

  useEffect(()=>{
    if(selectedChurras){
      setChurras(selectedChurras);
    }else{
      getChurras(match.params.id);
    }
  },[selectedChurras, match.params.id, getChurras]);
  
  return (<Styled.Container>
      <BackButton/>
      <Styled.InfoBox>
        {churras ?
        <React.Fragment>
          <Styled.InfoContainer>
            <Styled.LeftContainer>
              <Styled.Date>{churras.date}</Styled.Date>
              <Styled.Title>{churras.description}</Styled.Title>
            </Styled.LeftContainer>
            <Styled.RightContainer>
              <Styled.TotalInvited>
                  <Styled.ColoredPeople/>
                  {churras.totalGuests}
              </Styled.TotalInvited>   
              <Styled.TotalValue>
                  <Styled.ColoredAttachMoney/>
                  R${churras.totalValue}
              </Styled.TotalValue>
            </Styled.RightContainer>
            <Styled.Note>{churras.note}</Styled.Note>
          </Styled.InfoContainer>
          <Styled.GuestList>
            {churras.guests.map(guest => (
                <GuestListItem
                  _id={guest._id}
                  name={guest.name}
                  value={guest.value}
                  key={guest._id}
                />
            ))}
            <Styled.AddButtonContainer onClick={()=>addGuest()}>
              <Styled.ColoredAdd/>
              Adicionar Convidado
            </Styled.AddButtonContainer>
          </Styled.GuestList>
        </React.Fragment>
        :"Carregando..."}
      </Styled.InfoBox>
    </Styled.Container>)
}
export default connect(mapStateToProps, mapDispatchToProps)(Churras);
