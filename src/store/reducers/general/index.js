const INITIAL_STATE = {
    showModal:false
}

const general = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case'DISMISS_MODAL':
            return {...state, showModal: false}
        default: return state;
    }
}

export default general;