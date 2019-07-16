const INITIAL_STATE = {
    showModal:false,
    modalType:'',
    optParams: null
}

const general = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DISMISS_MODAL':
            return {...state, showModal: false};
        case 'SHOW_MODAL':
            return { ...state, showModal: true, modalType: action.modalType };
        case 'REMOVE_GUEST':
            return { ...state, showModal: true, modalType: 'removeGuest', optParams: action.guest }
        default: return state;
    }
}

export default general;