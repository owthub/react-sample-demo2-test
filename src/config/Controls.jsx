export const Controls = [
    {
        type: "text",
        name: "name",
        placeholder: "Enter name",
        id: "name",
        label: "Enter Name"
    },
    {
        type: "email",
        name: "email",
        placeholder: "Enter email",
        id: "email",
        label: "Enter Email"
    },
    {
        type: "password",
        name: "password",
        placeholder: "Enter password",
        id: "password",
        label: "Enter Password"
    },
    {   
        type: "select",
        name: "designation",
        id: "designation",
        label: "Select Designation",
        options: [
            {
                text: "PHP",
                value: "php"
            },
            {
                text: "Java",
                value: "java"
            },
            {
                text: "HTML",
                value: "html"
            },
            {
                text: "Python",
                value: "python"
            }
        ]
    },
    {
        type:"select",
        name:"gender",
        id:"gender",
        label: "Select Gender",
        options:[
            {
                text: "Male",
                value: "male"
            },
            {
                text: "Female",
                value: "female"
            }
        ]
    }
]