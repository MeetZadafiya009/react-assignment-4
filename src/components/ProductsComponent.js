import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/productActions';
import './../style/bootstrap.css';
import './../style/style.css';
const ProductsComponent = (props) => {
    const dispatch=useDispatch();
    const addCart=(data)=>{
        dispatch(addToCart(data));
    }
    return (
        <>
            {
                props.data.length != 0 ?
                    props.data.map((product,index) => (
                        <div key={index} className="col-6">
                            <div className="card">
                                <div className="card-body row align-items-center">
                                    <div className='col-6'>
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                    </div>
                                    <div className='col-6'>
                                        <button className="mb-3 btn btn-dark">₹{product.price}</button><br />
                                        <button onClick={()=>addCart(product)} className="btn btn-outline-primary">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) :
                    <></>
            }
        </>

    );
}
export default ProductsComponent;