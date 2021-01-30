import React, { Fragment } from 'react'
import './index.css'

const MainFeature = (props) => {
    return (
        <Fragment>
            <a href="#" className={props.classname}>
                <div>
                    <h1>{props.name}</h1>
                    <p>{props.session}</p>
                    <h4>SHOP NOW</h4>
                    <div className="line"></div>
                </div>
            </a>
        </Fragment>

    )
}

export default MainFeature;