import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';

import * as Styled from './styles';
import GuestListItem from '../../components/GuestListItem'

const mapStateToProps = state => ({
  selectedChurras: state.churras.selectedChurras
});

const Churras = ({match, selectedChurras}) => {
  const [ churras, setChurras ] = useState(null);

  useEffect(()=>{
    setChurras(selectedChurras);
  },[selectedChurras]);
  
  return (<Styled.Container>
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
          </Styled.InfoContainer>
          <Styled.GuestList>
            {churras.guests.map(guest => (
                <GuestListItem
                  name={guest.name}
                  value={guest.value}
                  key={guest._id}
                />
              ))
            }
          </Styled.GuestList>
        </React.Fragment>
        :"Tem nada :("}
      </Styled.InfoBox>
    </Styled.Container>)
}
export default connect(mapStateToProps, null)(Churras);
