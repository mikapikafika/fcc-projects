import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import timerReducer from './reducers';

const store = createStore(timerReducer, applyMiddleware(thunkMiddleware));

export default store;
