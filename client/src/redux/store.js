import   { applyMiddleware, combineReducers, createStore }  from "redux"
import thunk from "redux-thunk"
import {composeWithDevtools} from 'redux-devtools-extension'



const initialState ={

}

const reducers = combineReducers({})


const store = createStore(reducers,initialState,composeWithDevtools(applyMiddleware(thunk)))


export default store