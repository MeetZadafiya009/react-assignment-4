import { cartActions } from "../constants/constants"

export const addToCart=(data)=>{
    return {
        type:cartActions.ADD_TO_CART,
        payload:data
    }
}
export const removeToCart=(data)=>{
    return {
        type:cartActions.REMOVE_TO_CART,
        payload:data
    }
}