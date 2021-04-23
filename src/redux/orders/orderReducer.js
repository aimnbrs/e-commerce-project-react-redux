import userConst from "../users/userConstant";
import orderConst from "./orderConstant";



function orderCollectionReducer(state = { orders: [] }, action) {
  switch (action.type) {
    case orderConst.ORDERCOLLECTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case orderConst.ORDERCOLLECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
      case orderConst.UPDATEORDER_SUCCESS: 
      const index = state.orders.findIndex((element)=> element._id===action.payload._id)
      state.orders[index].quantity = action.payload.quantity
        return {
          ...state,
         orders : [
           ...state.orders 
         ],
          loading: false,        
        };
        case orderConst.DELETEORDER_SUCCESS:
          const indexToDelete = state.orders.findIndex((element)=> element._id===action.payload._id)
          state.orders.lenght == 1 ? (state.orders = []) :( state.orders.splice(indexToDelete, 1))
            return {
              ...state,
             orders : [
               ...state.orders 
             ],
              loading: false,        
            };
    case orderConst.ORDERCOLLECTION_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
      case userConst.SIGNOUT:
      return {
        state : {}
      };
    default:
      return state;
  }
}

function creatOrderReducer(state = { orders: [] }, action) {
  switch (action.type) {
    case orderConst.CREATORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case orderConst.CREATORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };

    case orderConst.CREATORDER_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
}

function updateOrderReducer(state = {orders : []}, action) {
    switch (action.type) {
        case orderConst.UPDATEORDER_REQUEST :
            return {
                ...state,
                loading : true
            }
   
        case orderConst.UPDATEORDER_FAILURE :
            return {
                ...state,
                err : action.payload
            }
        default :
        return state;
    }
}

function deleteOrderReducer(state = { orders: [] }, action) {
  switch (action.type) {
    case orderConst.DELETEORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
 
    case orderConst.DELETEORDER_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
}

export {
  orderCollectionReducer,
  creatOrderReducer,
  updateOrderReducer,
  deleteOrderReducer,
};
