import { useContext, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { MyAppGlobalContext } from "../context/AppGlobalState";

function SingleProduct(){

    const { productsList } = useContext(MyAppGlobalContext)

    const param = useParams();
    const location = useLocation();
    
    console.log(param, location);

    useEffect( () => {
        console.log(productsList.find( (singleProduct, index) => {
            return singleProduct.id == param.id
        }));
    }, [param.id]);
    
    return <>
        <Link to='/products'>Back</Link>
        <h3>Single Product</h3>
        <p>Item ID: {param.id}</p>
    </>
}

export default SingleProduct;