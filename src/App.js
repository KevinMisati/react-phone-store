/* import logo from './logo.svg'; */
import React from 'react';
import {Switch,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import Details from "./components/Details"
import Cart from "./components/cart"
import Default from "./components/Default"
import Modal from "./components/Modal"
import Footer from "./components/Footer"

import './App.css';



function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Footer />
      <Modal />
    </React.Fragment>
  );
}

export default App;
