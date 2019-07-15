import axios from "../../../config/axios";

const appendChurras = churras => ({
  type: 'APPEND_CHURRAS',
  churras
});

const setChurraslist = churrasList => ({
  type: 'SET_CHURRAS_LIST',
  churrasList
});

export const fetchChurraslist = () => {
  return dispatch => {
    axios.get("churras")
    .then(res =>{
      dispatch(setChurraslist(res.data.churrasList));
    })
    .catch(err =>{
      console.log(err);
    })
  }
}

export const setChurras = churras => ({
  type: 'SET_CHURRAS',
  churras  
});

export const createChurras = churras => {
  return dispatch => {
    axios.post("churras", {...churras})
    .then(res =>{
      dispatch(appendChurras(res.data.newChurras))
      dispatch(setChurras(res.data.newChurras))
    })
    .catch(err =>{
      console.log(err)
    })
  }
}