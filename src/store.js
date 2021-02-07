import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import {signInReducer, signUpReducer, signOutReducer, updateReducer} from './redux/users/userReducer'
import { productCollectionReducer } from "./redux/products/productReducer"

const userInfo = Cookie.getJSON("userInfo") || null;
const products = Cookie.getJSON("productCollectionStore") || [] ;

const initialState = {
    user : { userInfo },
    productcollection : { products } 
}

const reducer = combineReducers({
signin : signInReducer,
signUp : signUpReducer,
productCollection : productCollectionReducer
})
const store = createStore(reducer, initialState ,applyMiddleware(thunk))
console.log("store",store.getState())


export default store;