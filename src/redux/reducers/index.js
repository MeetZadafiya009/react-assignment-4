import { combineReducers } from "redux";
import { cardItemsReducers } from "./cartItems";
import productsReducers from "./productsReducers";
const reducer=combineReducers({
    allproducts:productsReducers,
    cartItems:cardItemsReducers
})

export default reducer;