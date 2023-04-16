import   { applyMiddleware, combineReducers, createStore }  from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from "./reducers/auth";
import modalReducer from "./reducers/modal";


const initialState ={

}

const reducers = combineReducers({
   auth: authReducer,
   modal:modalReducer
})


const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))


export default store