import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import ProductView from './components/ProductView';
import Cart from './components/Cart'
import { BrowserRouter as Router, Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
function App()  {
    const cart = useSelector(state => state.cart.cartItems)
    return (
        <div >
            <Router>
             <Header props={cart.length} />
             <Route path="/" exact component={ProductView}  />
             <Route path='/cart/' exact component={Cart} />
            
            
            </Router>
            
        </div>
    )
}

export default App;