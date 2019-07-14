const INITIAL_STATE = {
    showModal:false,
    modalType:''
}

const general = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DISMISS_MODAL':
            return {...state, showModal: false};
        case 'SHOW_MODAL':
            return { ...state, showModal: true, modalType: action.modalType };
        default: return state;
    }
}

export default general;