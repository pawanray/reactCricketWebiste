import {createStore,applyMiddleware, compose, combineReducers} from 'redux'
import matchesReducer from './reducers/matchesReducer';
import newsReducer from './reducers/newsReducer';
import TeamReducer from './reducers/teamReducer';
import PlayersReducer from './reducers/playerReducer';
import ModalReducer from './reducers/modalReducer';
import AuthReducer from './reducers/authReducer';

import thunk from 'redux-thunk'
const rootReducer = combineReducers(
  {
    matches:matchesReducer,
    news:newsReducer,
    teams:TeamReducer,
    players:PlayersReducer,
    modal:ModalReducer,
    auth:AuthReducer
  }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store