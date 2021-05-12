import productConst from "./productConstant";

function productCollectionReducer(state = { products: [] }, action) {
  switch (action.type) {
    case productConst.PRODUCTCOLLECTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConst.PRODUCTCOLLECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case productConst.PRODUCTCOLLECTION_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    case productConst.CREATPRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
}

function creatProductReducer(state = {}, action) {
  switch (action.type) {
    case productConst.CREATPRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case productConst.CREATPRODUCT_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
}

function updateProductReducer(state = {}, action) {
  switch (action.type) {
    case productConst.UPDATEPRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConst.UPDATEPRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productCollection: null,
      };
    case productConst.UPDATEPRODUCT_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
}

function deleteProductReducer(state = {}, action) {
  switch (action.type) {
    case productConst.DELETEPRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConst.DELETEPRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productCollection: null,
      };
    case productConst.DELETEPRODUCT_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
}

export {
  productCollectionReducer,
  creatProductReducer,
  updateProductReducer,
  deleteProductReducer,
};
