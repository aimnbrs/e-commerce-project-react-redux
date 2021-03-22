import React, { Fragment, useEffect, useState } from 'react';
import {useTransition, animated, config} from 'react-spring'
import './index.css'


const Jambatron = props => {

    const slides = [
        { id:1, url : "slide-01.jpg" },
        { id:2, url : "slide-02.jpg" },
        { id:3, url : "slide-03.jpg" }
    ]
    let C1 = ["Women Collection 2018","Men New-Season","Men Collection 2018"];
    let C2 = ["NEW SEASON","Jackets & Coats","New arrivals"];
    const slidesText = [
        {},
        {},
        {}
    ]
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index],i=>i.id,{
        from : {opacity : 0},
        entre : {opacity : 1},
        leave : {opacity : 0}
    }) 
    useEffect(() => {
        setInterval(()=>{
             set(index => (index + 1)%3)
        } , 3000);
    }, [])
    return (
        <Fragment>
                <section className="f-s">
                <div id="slide">

                   {transitions.map(({item,key,props}) => (
                        <animated.div id='slide1' key={key} style={{...props, backgroundImage: item.url}}>
                        <div className="txtslide">
                            <div className="txtsld1" id="txtsld1">
                                <p>Women Collection 2018</p>
                                <h1>NEW SEASON</h1>
                                <div className="ho">
                                    <a href="#" className="butn">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                   )) 
                  }
                </div>

            </section>
        </Fragment>
    )
}


export default Jambatron;