import { sumValue } from '../../../shared/helpers';
const INITIAL_STATE = {
    churrasList: null,
    selectedChurras: null,
    shouldUpdateList: false,
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
        case 'APPEND_GUEST':
            return {
                ...state,
                shouldUpdateList: true,
                selectedChurras: {
                    ...state.selectedChurras,
                    totalValue: sumValue(state.selectedChurras.guests.concat(action.guest)),
                    totalGuests: state.selectedChurras.guests.concat(action.guest).length,
                    guests: state.selectedChurras.guests.concat(action.guest)
                }
            };
        case 'REMOVE_GUEST_FROM_LIST':
            return {
                ...state,
                shouldUpdateList: true,
                selectedChurras: {
                    ...state.selectedChurras,
                    totalValue: sumValue(state.selectedChurras.guests.filter(guest => guest._id !== action.guest._id)),
                    totalGuests: state.selectedChurras.guests.length - 1,
                    guests: state.selectedChurras.guests.filter(guest => guest._id !== action.guest._id)
                }
            };
        default: return state;
    };
};

export default churras;