import { useContext } from "react";
import { MyAppGlobalContext } from "../context/AppGlobalState";

function SelectField({fieldAttr}){

    const {handleInputOnChange} = useContext(MyAppGlobalContext)

    return <>
        <p>
            <label htmlFor={fieldAttr.name}>{fieldAttr.label}</label>: &nbsp;&nbsp;&nbsp;
            
            <select onChange={ (event) => handleInputOnChange(event) } name={fieldAttr.name} id={fieldAttr.id}>
                {
                    fieldAttr?.options?.length > 0 ? (
                        fieldAttr.options.map( (option, index) => (
                            <option key={index} value={option.value}>{option.text}</option>
                        ) )
                    ) : ""
                }
            </select>
        </p>
    </>
}

export default SelectField;