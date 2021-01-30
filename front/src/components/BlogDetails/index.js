import React, { Fragment } from "react";
import './index.css';

export default function BlogDetails() {
  return (
    <Fragment>
      <div style={{marginTop:"50px"}} class="Blogcontainer">
        <div class="area-1">
            <div className="imageBlog">
            </div>
        </div>
        <div class="area-2"><h1>8 Inspiring Ways to Wear Dresses in the Winter</h1></div>
        <div class="area-3"><p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
         Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p> </div>
        <div class="area-4"><h4> by Admin <span>|</span>
        StreetStyle, Fashion, Couple<span>|</span>8 Comments</h4>
        <h4 style={{marginLeft: "auto"}}>CONTINUE READING</h4>            
        </div>
      </div>
    </Fragment>
  );
}
