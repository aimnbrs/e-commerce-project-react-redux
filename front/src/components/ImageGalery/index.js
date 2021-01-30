import React , { Fragment } from 'react';
import ProductBox from '../ProductBox';
import './index.css';




export default function ImageGalery ({changeSummary}) {
    return (
        <Fragment>
             <div className="grid-img">
      <div className="imgg" id="imgg">
          <ProductBox changeSummary= {changeSummary}/>
          <ProductBox changeSummary= {changeSummary}/>
          <ProductBox changeSummary= {changeSummary}/>
          <ProductBox changeSummary= {changeSummary}/>

          </div>
                </div>
                <div className="btn" id="butn-btnfxd">
                    <a className="butn btnfxd">LOAD MORE</a>
                </div>
        </Fragment>
    )
}