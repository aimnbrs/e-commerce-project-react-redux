import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import {signInReducer, signUpReducer, signOutReducer, updateReducer} from './redux/users/userReducer'


const reducer = combineReducers({
signin : signInReducer,
signUp : signUpReducer
})
const store = createStore(reducer, {} ,applyMiddleware(thunk))

export default store;