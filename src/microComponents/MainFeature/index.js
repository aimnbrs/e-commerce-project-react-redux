import React, { Fragment } from 'react'
import './index.css'
import "./"

const MainFeature = (props) => {
    return (
        <Fragment>
            <a href="#" className="mainPhotoCategory">
                
                    <img src = {props.url}/>
                    <h1>{props.name}</h1>
                    <p>{props.session}</p>
                    <h4>SHOP NOW</h4>
                    <div className="line"></div>
                
            </a>
        </Fragment>

    )
}

export default MainFeature;