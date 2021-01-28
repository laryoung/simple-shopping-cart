import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';


import {
    productsReducer,
    selectedProductReducer,
    cartReducer,
} from './reducers';

let data = {
    _id: '1',
    name: 'Boys Stillwater Sherpa 1/4-Zip',
    category: 'Shirts',
    image: ['/images/b1.jpg', '/images/b1-1.jpg', '/images/b1-2.jpg'],
    price: 120,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    description: 'high quality product',
    discount: 'Eligible for discount',
    shipping: 126,
    color: ['gray'],
    size: ['2T', '3T', '4T', 'S', 'M', 'L', 'XL'],
  }

const cartItems = Cookie.getJSON('cartItems') || []
const selected = data || null
const initialState = {
    cart: {cartItems},
    selectedProduct: selected
}

const reducer = combineReducers({
    products: productsReducer,
    selectedProduct: selectedProductReducer,
    cart : cartReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;