import { cartActions } from "../constants/constants";

export const cardItemsReducers = (state = { cartData: [], total: 0, quantity: 0 }, { type, payload }) => {
    switch (type) {
        case cartActions.ADD_TO_CART:
            if (state.cartData.find((item) => item.id == payload.id)) {
                payload.quantity += 1;
                return {
                    cartData: [...state.cartData],
                    total: state.total + payload.price,
                    quantity: state.quantity + 1
                }
            } else {
                payload.quantity = 1;
                return {
                    cartData: [...state.cartData, payload],
                    total: state.total + payload.price,
                    quantity: state.quantity + 1
                }
            }
            break;
        case cartActions.REMOVE_TO_CART:
            state.cartData.filter((item)=>item.id==payload.id).forEach((item)=>(
                item.quantity-=1
            ))
            return {
                cartData: [
                    ...state.cartData.filter((item)=>item.quantity!=0)
                ],
                total:state.total-payload.price,
                quantity:state.quantity-1
            }
            break;
        default:
            return state;
    }
}