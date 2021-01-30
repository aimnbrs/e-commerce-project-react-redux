import React from 'react';
import Home from './pages/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Features from './pages/Features';
import Contact from './pages/Contact';
import ProductionDetails from './components/ProductionDetails';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Home' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/features' component={Features}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/shop' component={Shop}/>
      <Route path='/Contact' component={Contact}/>
      <Route path='/Production' component={ProductionDetails}/>
      <Route path='/signIn' component={SignIn}/>
      <Route path='/signUp' component={SignUp}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
