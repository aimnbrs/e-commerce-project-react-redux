import blogsConst from "./blogsConstant";
import axios from "axios";
import store from "./../../store";
import Cookie from "js-cookie";

const blogs = () => async (dispatch) => {
  dispatch({ type:  blogsConst.BLOGS_REQUEST });
  console.log("errorBlogs",store.getState());
  try {
    let  {data}  = await axios.get(
      "http://localhost:5000/blogs"
    );
    console.log("blogsAction", data);
    dispatch({ type: blogsConst.BLOGS_SUCCESS, payload : data });
    Cookie.set("blogsCollectionStore",JSON.stringify(data));
    console.log(store.getState());
  } catch (error) {
    dispatch({ type: blogsConst.BLOGS_FAILURE, payload: error.message });
    console.log("error",store.getState());
  }
};

export default blogs