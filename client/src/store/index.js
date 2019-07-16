import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import churras from './reducers/churras';
import general from './reducers/general';


const store = combineReducers({
    churras,
    general
});

export default createStore(
    store,
    applyMiddleware(thunk)    
);