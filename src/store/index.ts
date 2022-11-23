import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from './reducer'
import reducer2 from './store2/reducer'

const reducers = combineReducers({
    reducer,
    reducer2
})

const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// const store = legacy_createStore(reducers, applyMiddleware(reduxThunk))

export default store