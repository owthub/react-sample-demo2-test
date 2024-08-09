import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyAppGlobalContext } from "../context/AppGlobalState"; // Use the correct context

function Products() {
    const { productsList } = useContext(MyAppGlobalContext); // Use the correct context

    return (
        <>
            <h1>Products Page</h1>
            <ul>
                {productsList?.length > 0 ? (
                    productsList.map((singleProduct, index) => (
                        <li key={index}>
                            ID: {singleProduct.id} || Name: {singleProduct.name}{" "}
                            <Link to={`/single-product/${singleProduct.id}`}>View Product</Link>
                        </li>
                    ))
                ) : (
                    <li>No Product Found</li>
                )}
            </ul>
        </>
    );
}

export default Products;
