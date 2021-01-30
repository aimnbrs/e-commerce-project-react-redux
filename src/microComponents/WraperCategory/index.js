import React, { Fragment }  from 'react';
import './index.css'


export default function WraperCategory(props) {
    return (
        <Fragment>
            <section id="ss">
                {props.children}
            </section>
        </Fragment>
    )
}