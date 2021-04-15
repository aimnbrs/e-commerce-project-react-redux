import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function BlogDetails({artical, text, url, author, id}) {
  
  

  return (
    <Fragment>
      <div style={{ marginTop: "50px" }} class="Blogcontainer">
        <div class="area-1">
          <div className="imageBlog" style={{ backgroundImage: `url(${url})`  }}></div>
        </div>
        <div class="area-2">
          <h1>{artical}</h1>
        </div>
        <div class="area-3">
          <p>
          {text}
          
          </p>{" "}
        </div>
        <div  class="area-4">
          <h4 style={{ marginRight: "50px"}}>
            {" "}
            {author} <span>|</span>StreetStyle, Fashion, Couple<span>|</span>8
            Comments
          </h4>
           {id && <Link to = {`blogDetails${ id }`}><h4 >CONTINUE READING</h4></Link>}
          
        </div>
      </div>
    </Fragment>
  );
}
