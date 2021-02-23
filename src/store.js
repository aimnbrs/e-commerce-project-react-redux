import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import {signInReducer, signUpReducer, updateReducer} from './redux/users/userReducer'
import { productCollectionReducer } from "./redux/products/productReducer"


const initialState = {
    signin :  {userInfo : null} ,
    productcollection : { products : {} } 
}

const reducer = combineReducers({
signin : signInReducer,
signUp : signUpReducer,
productCollection : productCollectionReducer
})
const store = createStore(reducer, initialState ,applyMiddleware(thunk))
console.log("store",store.getState())


export default store;