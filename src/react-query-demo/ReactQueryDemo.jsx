import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addNewProduct, fetchListOfProducts } from "./api";
import { useState } from "react";

function ReactQueryDemo(){

    const [productTitle, setProductTitle] = useState("")

    const getQueryClient = useQueryClient();

    const {data: productList, isLoading} = useQuery({
        queryKey: ["productList"],
        queryFn: () => {
            return fetchListOfProducts()
        }
    });

    const {mutateAsync: handleAddNewProductMutation} = useMutation({
        mutationFn: addNewProduct,
        onSuccess: () => {
            getQueryClient.invalidateQueries("productList")
        }
    })

    async function handleAddNewProduct(){
        await handleAddNewProductMutation(productTitle);
        setProductTitle("");
    }


    //console.log(query);

    if(isLoading) return <p>Loading Products, please wait</p>
    
    return <>
        <h3>React Query Demo</h3>
        <p>
            <label htmlFor="product">Product Name</label>
            <input type="text" name="product" value={productTitle} onChange={ (e) => setProductTitle(e.target.value) } placeholder="Enter Product"/>
        </p>
        <p>
            <button onClick={handleAddNewProduct} disabled={ productTitle.trim() === ""} type="button">Add Product</button>
        </p>
        <ul>
            {
                productList?.length > 0 ? (
                    productList.map( (singleItem) => (
                        <li key={singleItem.id}>{singleItem.id} - {singleItem.title}</li>
                    ) )
                ) : <li>No Product Found</li>
            }
        </ul>
    </>
}

export default ReactQueryDemo