import { createContext, useState } from "react";

export const MyAppGlobalContext = createContext(null);

function AppGlobalState({ children }) {
    const productsList = [
        {
            id: 1,
            name: "Product 1",
            slug: "product-1"
        },
        {
            id: 2,
            name: "Product 2",
            slug: "product-2"
        },
        {
            id: 3,
            name: "Product 3",
            slug: "product-3"
        }
    ];

    const [formData, setFormData] = useState({})

    function handleInputOnChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(formData)
    }

    return <>
        <MyAppGlobalContext.Provider value={{ productsList, formData, setFormData, handleFormSubmit, handleInputOnChange }}>
            {children}
        </MyAppGlobalContext.Provider>
    </>
}

export default AppGlobalState;
