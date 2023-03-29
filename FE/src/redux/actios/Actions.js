import { ADD_ADDRESS, ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_ADDRESS, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST, RESET } from "../ActionTypes";

export const addItemToCart=data=>({
    type: ADD_TO_CART,
    payload: data,
})

export const removeFromCart = index => ({
    type: REMOVE_FROM_CART,
    payload: index,
})

export const addToWishlist = data => ({
    type: ADD_TO_WISHLIST,
    payload: data,
})

export const removeFromWishlist = index => ({
    type: REMOVE_FROM_WISHLIST,
    payload: index,
})

export const addAddress = data => ({
    type: ADD_ADDRESS,
    payload: data,
})

export const removeAddress = index => ({
    type: REMOVE_ADDRESS,
    payload: index,
})

export const reset = () =>({
    type: RESET
})
