import data from '../data';

const productsReducer = () => {

   return data
};

const selectedProductReducer = (state = {}, action) => {
    if (action.type === 'PRODUCT_SELECTED'){
        return action.payload;
    }
    return state;
};



const cartReducer = ( state= { cartItems: [] }, action) => {
    
     switch (action.type){
        case 'CART_ADD_ITEM':
            const item = action.payload;
            const product = state.cartItems.find(x => x._id === item._id);
            if (product) {
              return {
                cartItems:
                  state.cartItems.map(x => x._id === product._id ? item : x)
              };
            }
            return { cartItems: [...state.cartItems, item] };
            
       


        case 'CART_REMOVE_ITEM':
              return { cartItems: state.cartItems.filter(item => item._id !== action.payload) };
        
        default:
            return state
   
         }
}

export { productsReducer, cartReducer, selectedProductReducer}

