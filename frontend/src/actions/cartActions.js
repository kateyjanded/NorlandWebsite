import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${productId}`);
    try {
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                product: data._id,
                seller: data.seller,
                qty,
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)
        );
    } catch (error) {
        
    }
};

export const removeFromCart = (productId) => (dispatch, getState) => {   
    try {
        dispatch({type: CART_REMOVE_ITEM, payload: productId});
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        
    }
}