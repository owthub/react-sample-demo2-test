import { Controls } from "../config/Controls";
import TextField from "../Fields/TextField";
import SelectField from "../Fields/SelectField";
import { MyAppGlobalContext } from "../context/AppGlobalState";
import { useContext } from "react";

const FormFields = {
    TEXT: "text",
    PASSWORD: "password",
    EMAIL: "email",
    SELECT: "select"
}

function Form(){

    const {handleFormSubmit} = useContext(MyAppGlobalContext)

    function renderFormField(field){
        let fieldControl = null;
        switch (field.type) {
            case FormFields.TEXT:
                fieldControl = <TextField key={field.id} fieldAttr={field}/>
                break;
            case FormFields.EMAIL:
                fieldControl = <TextField key={field.id} fieldAttr={field}/>
                break;
            case FormFields.PASSWORD:
                fieldControl = <TextField key={field.id} fieldAttr={field}/>
                break;
            case FormFields.SELECT:
                fieldControl = <SelectField key={field.id} fieldAttr={field}/>
                break;

            default:
                break;
        }
        return fieldControl;
    }

    return <>
        <h3>My Form</h3>
        <form onSubmit={(event) => handleFormSubmit(event)}>
            {
                Controls?.length > 0 ? (
                    Controls.map( (eachField, index) => {
                        return renderFormField(eachField)
                    })
                ) : (
                    <h4>No Fields Found</h4>
                )
            }

            <button type="submit">Submit</button>
        </form>
    </>
}

export default Form;