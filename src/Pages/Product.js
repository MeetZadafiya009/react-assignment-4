import './../style/bootstrap.css';
import './../style/style.css';
import { useSelector } from "react-redux";
import ProductsComponent from "../components/ProductsComponent";
const Product=()=>{
    const product=useSelector((state)=>state.allproducts);
    return(
        <section>
            <div className="container">
                <div className="row py-5">
                    <div className="col-12">
                        <h4 className="text-center">
                            Buy Your Favourite Product
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <ProductsComponent data={product} />
                </div>
            </div>
        </section>
    )
}
export default Product;