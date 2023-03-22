import { fireEvent, screen, render} from "@testing-library/react";
import { Provider } from "react-redux";
import HeaderComponent from "./components/HeaderComponent";
import store from "./redux/store";

test("Modal Testing", () => {
    render(
        <Provider store={store}>
            <HeaderComponent />
        </Provider>
    );
    const button = screen.queryByTestId('button');
    console.log(button);
    fireEvent.click(button);
    const linkElement = screen.queryByText('Your Cart is Empty');
    expect(linkElement).toBeInTheDocument();
    const closeButton=screen.queryByTestId('close-btn');
    console.log(closeButton);
    fireEvent.click(closeButton);
    expect(linkElement).toBeInTheDocument();
});
