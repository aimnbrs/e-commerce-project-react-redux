import React, { Fragment } from 'react';
import './index.css';
import Jambatron from './../../components/Jambatron';
import MainCategory from '../../components/MainCategory';
import ProductOverView from '../../components/ProductOverView';
import ImageGalery from '../../components/ImageGalery';
import Axios from 'axios';



function Home(props) {
//     Axios.get('http://localhost:4000/')
//     .then(function (response) {
//       // handle success
//       console.log(response);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     }).then(()=>{

//     })

// async () => {

//     try {
//         let { data } = await Axios.get('http://localhost:4000/');
//       console.log(data)
//     } catch(err) {
//       // catches errors both in fetch and response.json
//       alert(err);
//     }
//   }
  async function f() {

    try {
        let { data } = await Axios.get('http://localhost:4000/');
        console.log(data)
    } catch(err) {
      // catches errors both in fetch and response.json
      console.log(err);
    }
  }
  
  f();
  
  


    return (
        <Fragment>
            <Jambatron/>
    
            <MainCategory/>
            <ProductOverView/>
            <ImageGalery/>
        </Fragment>
    )
}


export default Home;