import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'

const store = createStore(
    reducer,
    {},
    applyMiddleware(ReduxThunk, logger)
)



export default store;