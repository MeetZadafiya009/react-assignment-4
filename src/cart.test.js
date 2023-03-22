import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Product from "./Pages/Product";
import { addToCart, removeToCart } from "./redux/actions/productActions";
import { cardItemsReducers } from "./redux/reducers/cartItems";
import productsReducers from "./redux/reducers/productsReducers";
import store from "./redux/store";
describe("productsReducers",()=>{
    it("should recieved to all product from product reducers", () => {
        const initialState = {};
        let action = {};
        const result = productsReducers(initialState, action);
        console.log("stores",store.getState().allproducts);
        expect(result.length).toEqual();
    });
});
describe("cartItem reducer", () => {
    it("should return the initial state when passed an empty action", () => {
        const initialState = undefined;
        const action = { type: "" };
        const result = cardItemsReducers(initialState, action);
        expect(result).toEqual({ cartData: [], total: 0, quantity: 0 })
    });
    it("Added To Cart", () => {
        const initialState = { cartData: [], total: 0, quantity: 0 };
        let data = { id: 1, name: "nfvref", price: 787, quantity: 1 };
        const action = addToCart(data);
        const result = cardItemsReducers(initialState, action);
        expect(result.cartData.find((item) => item.id = data.id)).toEqual(data);
    });

    it("Remove To Cart", () => {
        const initialState = { cartData: [{ id: 1, name: "nfvref", price: 787, quantity: 2 }], total: 787 * 2, quantity: 2 };
        let data = { id: 1, name: "nfvref", price: 787, quantity: 2 };
        const action = removeToCart(data);
        const result = cardItemsReducers(initialState, action);
        //console.log(result); 
        expect(result.cartData.length).toEqual(data.quantity - 1);
    })
})