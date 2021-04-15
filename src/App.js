import React, { useEffect } from 'react';
import Home from './pages/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetailsPage from './pages/BlogDetailsPage';
import Shop from './pages/Shop';
import Features from './pages/Features';
import Contact from './pages/Contact';
import ProductionDetails from './components/ProductionDetails';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { useDispatch } from 'react-redux';
import { productCollection } from "./redux/products/productAction";
import blogs from "./redux/blogs/blogsAction";
import SignOut from './pages/SignOut';
import SwitchContext from './components/Navbar/switchContext';



function App() {
  const dispatch = useDispatch();
 
  useEffect(()=> {
    dispatch(productCollection())
    dispatch(blogs())
  }, [])
  
 
  return (
    <div className="App">
      <BrowserRouter>
      <SwitchContext>
      <Navbar/>
      </SwitchContext>
      <Switch>
      <Route path='/Production' component={ProductionDetails}/>
      <SwitchContext>
      <Route exact path='/' component={Home}/>
      <Route path='/Home' component={Home}/>
      <Route path='/shop' component={Shop}/>
      <Route path='/about' component={About}/>
      <Route path='/features' component={Features}/>
      <Route exact path='/blog' component={Blog}/>
      <Route path='/blogDetails:id' component={BlogDetailsPage}/>
      <Route path='/Contact' component={Contact}/>
      <Route path='/signIn' component={SignIn}/>
      <Route path='/signUp' component={SignUp}/>
      <Route path='/signOut' component={SignOut}/>
      </SwitchContext>

      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
