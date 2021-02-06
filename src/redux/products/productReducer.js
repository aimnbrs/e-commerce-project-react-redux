import productConst from "./productConstant"

const initialState = {
    loading : false,
    productCollection : null,
    err : {}
}

function productCollectionReducer (state = {...initialState}, action) {
    switch (action.type) {
        case productConst.PRODUCTCOLLECTION_REQUEST :
            return {
                ...state,
                loading : true
            }
        case productConst.PRODUCTCOLLECTION_SUCCESS :
            return {
                ...state,
                loading : false,
                productCollection : action.payload
            }    
        case productConst.PRODUCTCOLLECTION_FAILURE :
            return {
                ...state,
                err : action.payload
            }    
        default :
        return state;
    }
}

function creatProductReducer(state = {...initialState}, action) {
    switch (action.type) {
        case productConst.CREATPRODUCT_REQUEST :
            return {
                ...state,
                loading : true
            }
        case productConst.CREATPRODUCT_SUCCESS :
            return {
                ...state,
                loading : false,
                productCollection 
            }    
        case productConst.CREATPRODUCT_FAILURE :
            return {
                ...state,
                err : action.payload
            }    
        default :
        return state;
    }
}



function updateProductReducer(state = {...initialState}, action) {
    switch (action.type) {
        case productConst.UPDATEPRODUCT_REQUEST :
            return {
                ...state,
                loading : true
            }
        case productConst.UPDATEPRODUCT_SUCCESS :
            return {
                ...state,
                loading : false,
                productCollection 
            }    
        case productConst.UPDATEPRODUCT_FAILURE :
            return {
                ...state,
                err : action.payload
            }    
        default :
        return state;
    }
}

function deleteProductReducer(state = {...initialState}, action) {
    switch (action.type) {
        case productConst.DELETEPRODUCT_REQUEST :
            return {
                ...state,
                loading : true
            }
        case productConst.DELETEPRODUCT_SUCCESS :
            return {
                ...state,
                loading : false,
                productCollection 
            }    
        case productConst.DELETEPRODUCT_FAILURE :
            return {
                ...state,
                err : action.payload
            }    
        default :
        return state;
    }
}

export  {productCollectionReducer, creatProductReducer,  updateProductReducer, deleteProductReducer};