
function EmailField({fieldAttr}){
    return <>
        <p>
            <label htmlFor={fieldAttr.name}>{fieldAttr.label}</label>: &nbsp;&nbsp;&nbsp;
            <input type="email" name={fieldAttr.name} placeholder={fieldAttr.placeholder} id={fieldAttr.id}/>
        </p>
    </>
}

export default EmailField;