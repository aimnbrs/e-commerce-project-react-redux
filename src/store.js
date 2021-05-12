import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { signReducer, updateReducer } from "./redux/users/userReducer";
import { productCollectionReducer } from "./redux/products/productReducer";
import blogsReducer from "./redux/blogs/blogsReducer";
import { orderCollectionReducer } from "./redux/orders/orderReducer";

const initialState = {
  signin: {},
  products: [],
  blogsList: {},
  orders: [],
};

const reducer = combineReducers({
  orders: orderCollectionReducer, 
  sign: signReducer,
  productCollection: productCollectionReducer,
  blogs: blogsReducer,
});
const store = createStore(reducer, initialState, applyMiddleware(thunk));
console.log("store", store.getState());

export default store;
