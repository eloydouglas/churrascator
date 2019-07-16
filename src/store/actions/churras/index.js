import axios from "../../../config/axios";
import {dismissModal} from '../general';

const appendChurras = churras => ({
  type: 'APPEND_CHURRAS',
  churras
});

const setChurraslist = churrasList => ({
  type: 'SET_CHURRAS_LIST',
  churrasList
});

const appendGuest = guest => ({
  type: 'APPEND_GUEST',
  guest
})

const removeGuestFromList = guest => ({
  type: 'REMOVE_GUEST_FROM_LIST',
  guest
})

export const setChurras = churras => ({
  type: 'SET_CHURRAS',
  churras  
});

export const getChurras = churrasId => {
  return dispatch => {
    axios.get(`churras/${churrasId}`)
    .then(res =>{
      dispatch(setChurras(res.data.churras));
    })
    .catch(err =>{
      console.log(err);
    });
  }
};

export const fetchChurraslist = () => {
  return dispatch => {
    axios.get("churras")
    .then(res =>{
      dispatch(setChurraslist(res.data.churrasList));
    })
    .catch(err =>{
      console.log(err);
    });
  };
};

export const addGuest = guest => {
  return (dispatch, getState) => {
    axios.post("guests", {...guest, churrasId: getState().churras.selectedChurras._id})
    .then(res =>{
      dispatch(appendGuest(res.data.newGuest))
      dispatch(dismissModal());
    })
    .catch(err =>{
      console.log(err)
    });
  };
};

export const createChurras = (churras, ownProps) => {
  return dispatch => {
    axios.post("churras", {...churras})
    .then(res =>{
      dispatch(appendChurras(res.data.newChurras));
      dispatch(setChurras(res.data.newChurras));
      dispatch(dismissModal());
      ownProps.history.push(`churras/${res.data.newChurras._id}`);
    })
    .catch(err =>{
      console.log(err)
    });
  };
};

export const deleteGuest = (guest) => {
  return dispatch => {
    axios.delete(`guests/${guest._id}`)
    .then(res =>{
      dispatch(removeGuestFromList(guest));
      dispatch(dismissModal());
    })
    .catch(err =>{
      console.log(err)
    });
  };
};