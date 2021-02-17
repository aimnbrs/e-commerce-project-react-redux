import React, { Fragment }  from 'react';
import './index.css'


export default function WraperCategory(props) {
    return (
        <Fragment>
            <div className="mainWraperContainer">
            <section id="ss">
                {props.children}
            </section>
            </div>
            
        </Fragment>
    )
}