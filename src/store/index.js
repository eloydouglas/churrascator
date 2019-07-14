import { combineReducers, createStore } from 'redux';
import churras from './reducers/churras';
import general from './reducers/general';


const store = combineReducers({
    churras,
    general
});

export default createStore(store);