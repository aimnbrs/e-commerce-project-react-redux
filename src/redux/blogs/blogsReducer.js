import blogsConst from "./blogsConstant"



function blogsReducer (state = {blogs : []}, action) {
    switch (action.type) {
        case blogsConst.BLOGS_REQUEST :
            return {
                ...state,
                loading : true
            }
        case blogsConst.BLOGS_SUCCESS :
            return {
                ...state,
                loading : false,
                blogs : action.payload
            }    
        case blogsConst.BLOGS_FAILURE :
            return {
                ...state,
                err : action.payload
            }    
        default :
        return state;
    }
}

export default blogsReducer