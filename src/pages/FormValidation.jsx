import { useState } from "react";
import { useForm } from "react-hook-form";

function FormValidation(){

    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: ""
    // })

    const {register, handleSubmit, formState: { errors }} = useForm();

    // function handleInputOnChange(event){
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value
    //     })
    // }

    const handleFormSubmit = (data) => {
        console.log(data);
    };

    return <>
        <h3>Form Validation</h3>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <p>
                <label htmlFor="name">Name</label>
                {/* <input onChange={handleInputOnChange} type="text" name="name" placeholder="Enter name" /> */}
                <input {...register("name", {
                    required: "Name is required"
                })} type="text" name="name" placeholder="Enter name" />
            </p>
            {errors.name && <p>{errors.name.message}</p>}

            <p>
                <label htmlFor="email">Email</label>
                {/* <input onChange={handleInputOnChange} type="email" name="email" placeholder="Enter email"/> */}
                <input {...register("email", {
                    required: "Email is required"
                })} type="email" name="email" placeholder="Enter email"/>
            </p>
            {errors.email && <p>{errors.email.message}</p>}

            <p>
                <button>Submit</button>
            </p>
        </form>
    </>
}

export default FormValidation;