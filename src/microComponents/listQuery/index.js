import React, { Fragment } from "react";
import "./index.css";

const ListQuery = ({firstList,secondeList,thirdList,forthList}) => {
  return (
    <Fragment>
      
        <section className="mainCollapse">
          <div className="collapse">
            <div className="firstListPart">
              <ul className="firstList">
              {
                  firstList.map((title)=>(
                      title
                  ))
              }
              </ul>
              <ul className="secondList">
              {
                  secondeList.map((title)=>(
                      title
                  ))
              }
              </ul>
            </div>
            <div className="secondeListPart">
              <ul className="thirdList">
              {
                  thirdList.map((title)=>(
                      title
                  ))
              }
              </ul>
              <ul className="forthList">
              {
                  forthList.map((title)=>(
                      title
                  ))
              }
              </ul>
            </div>
          </div>
        </section>
     
    </Fragment>
  );
};

export default ListQuery;