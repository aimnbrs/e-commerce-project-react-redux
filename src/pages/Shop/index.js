import React, { Fragment, useState} from 'react';
import ImageGalery from '../../components/ImageGalery';
import ProductionDetails from '../../components/ProductionDetails';
import ProductOverView from '../../components/ProductOverView';
import Modal from "react-modal";

import './index.css';

export default function Shop() {
const [showSummary, setShowSummary] = useState(false);
const changeSummary = () => {setShowSummary(!showSummary);}

  
    return (
      
        <Fragment>
            <Modal 
            isOpen={showSummary}
            onRequestClose={()=>setShowSummary(false)}
            style={
                {
                    overlay : {
                        backgroundColor : "grey"
                    }
                }
            }
            >
            <ProductionDetails/>
            </Modal>
            <ProductOverView/>
            <ImageGalery changeSummary={changeSummary}/>
        </Fragment>
    )
}
