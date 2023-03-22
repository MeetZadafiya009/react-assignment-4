import { render } from "@testing-library/react"
import { Provider } from "react-redux";
import { screen } from "@testing-library/react";
import Product from "./Pages/Product"
import store from "./redux/store";
test('product component',()=>{
    render(<Provider store={store}>
            <Product />
            </Provider>);
    const linkElement=screen.getByText(/Buy Your Favourite Product/);
    expect(linkElement).toBeInTheDocument();
});
