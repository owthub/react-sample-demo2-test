import { useContext } from "react";
import { MyAppGlobalContext } from "../context/AppGlobalState";

function TextField({fieldAttr}){

    const {handleInputOnChange} = useContext(MyAppGlobalContext);

    return <>
        <p>
            <label htmlFor={fieldAttr.name}>{fieldAttr.label}</label>: &nbsp;&nbsp;&nbsp;
            <input onChange={ (event) => handleInputOnChange(event) } type={fieldAttr.type} name={fieldAttr.name} placeholder={fieldAttr.placeholder} id={fieldAttr.id}/>
        </p>
    </>
}

export default TextField;