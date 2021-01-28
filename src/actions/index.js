import Cookie from "js-cookie";
import data from '../data';

export const selectProduct = (product) => {
    //Return an action
    return {
        type: 'PRODUCT_SELECTED',
        payload: product
    };
};

export const thumbnailImage = (image) => {
    return {
        type: 'IMAGE_SELECTED',
        payload: image
    }
}



export const addToCart = ( id, qty, color,size, discount)  =>   (dispatch, getState) => {
    const result =  data.products.find(item => item._id === id)
      if(discount){
          result.price = result.price * discount
      }
   try {  
    dispatch( {
        
        type: 'CART_ADD_ITEM', 
          payload: {
          _id: result._id,
          name: result.name,
          image: result.image,
          price: result.price,
          countInStock: result.countInStock,
          qty,
          size,
          color,
          discount
          
        }
      })
      const { cart: { cartItems }} = getState()
      
      Cookie.set("cartItems", JSON.stringify(cartItems));
   } catch (error){

   }
    } 



export const removeFromCart = productId => dispatch => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: productId });
}
  