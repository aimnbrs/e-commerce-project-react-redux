import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import {signReducer, updateReducer} from './redux/users/userReducer'
import { productCollectionReducer } from "./redux/products/productReducer"
import blogsReducer from "./redux/blogs/blogsReducer"




const initialState = {
    signin :  {} ,
    productcollection : { products : {} } ,
    blogsList : { }
}

const reducer = combineReducers({
sign : signReducer,
update : updateReducer,
productCollection : productCollectionReducer,
blogs : blogsReducer
})
const store = createStore(reducer, initialState ,applyMiddleware(thunk))
console.log("store",store.getState())


export default store;