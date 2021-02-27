import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import {signReducer, updateReducer} from './redux/users/userReducer'
import { productCollectionReducer } from "./redux/products/productReducer"



const initialState = {
    signin :  {} ,
    productcollection : { products : {} } 
}

const reducer = combineReducers({
sign : signReducer,
update : updateReducer,
productCollection : productCollectionReducer
})
const store = createStore(reducer, initialState ,applyMiddleware(thunk))
console.log("store",store.getState())


export default store;