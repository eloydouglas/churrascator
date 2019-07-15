const INITIAL_STATE = {
    churrasList: null,
    selectedChurras: null,
};

const churras = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CHURRAS':
            return {...state, selectedChurras: action.churras};

        case 'SET_CHURRAS_LIST':
            return {...state, churrasList: action.churrasList }
        case 'APPEND_CHURRAS':
            return {...state,
                    churrasList: state.churrasList 
                    ? state.churrasList.concat(action.churras)
                    : [action.churras]
                }
        default: return state;
    }
};

export default churras;