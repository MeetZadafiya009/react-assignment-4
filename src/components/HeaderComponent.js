import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './../style/bootstrap.css';
import './../style/style.css';
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { addToCart, removeToCart } from "../redux/actions/productActions";
const HeaderComponent = () => {
    const dispatch=useDispatch();
    const quantity = useSelector((state) => state.cartItems.quantity);
    const total=useSelector((state)=>state.cartItems.total);
    const cartData = useSelector((state) => state.cartItems.cartData);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <>
            <section className="header">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-9">
                            <h4>My Online Shopping Site</h4>
                        </div>
                        <div className="col-3">
                            <button onClick={() => setShow(true)} className="cart-btn btn btn-outline-success">My Cart <span className="cart-item badge bg-success">{quantity}</span></button>
                        </div>
                    </div>
                </div>
            </section>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="row">
                                    {cartData.length != 0 ?
                                        cartData.map((data, index) => (
                                            <div key={index} className="d-flex py-3 col-12">
                                                <div style={{flex:1}}>
                                                    <h4>{data.title}</h4>
                                                    <p>{data.description}</p>
                                                </div>
                                                <div>
                                                    <div className="d-flex">
                                                        <h5>₹ {data.price * data.quantity}</h5>
                                                        <span>({data.price}/count)</span>
                                                    </div>
                                                    <div className="d-flex">
                                                        <button onClick={()=>dispatch(addToCart(data))} className="btn btn-success">+</button>
                                                        <button className="btn btn-white">{data.quantity}</button>
                                                        <button onClick={()=>dispatch(removeToCart(data))} className="btn btn-danger">-</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        :
                                        <h5>Your Cart is Empty</h5>
                                    }
                                </div>
                                <div className="row py-3">
                                    <div className="offset-8 col-4">
                                        <h5>Total : ₹ {total}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default HeaderComponent;