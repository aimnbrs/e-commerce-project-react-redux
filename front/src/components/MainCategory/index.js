import React, { Fragment } from 'react';
import './index.css'
import MainFeature from './../../microComponents/MainFeature';
import WraperCategory from '../../microComponents/WraperCategory';



const MainCategory = props => {
    return (
        
        <Fragment>
            <WraperCategory>
            <MainFeature
                    name='WOMAN'
                    classname='women'
                    session='spring 2019'
                />
                <MainFeature
                    name='MEN'
                    classname='men'
                    session='spring 2019'
                />
                <MainFeature
                    name='ACCESSOIRIES'
                    classname='accessoiries'
                    session='New Trend'
                />
            </WraperCategory>
                

            
        </Fragment>
    );
}

export default MainCategory;