import { useState } from "react";
import Joi from "joi";



export default function  useForm(initialForm, validationSchema) {
     const [formDetails, setUserDetails] = useState(initialForm);
     const  [errors, setErrors] = useState({});

    const fullSchema = Joi.object(validationSchema);
    

        const handleChange = (e) => {
            const fieldName = e.target.name
            const fieldValue = e.target.value
    
            setUserDetails((prev) => ({
                ...prev,
                [fieldName]: fieldValue,
            }))
            
        const updatedDetails = {
                ...formDetails,
                [fieldName]: fieldValue
            };
    
            const { error } = fullSchema.validate(updatedDetails, { abortEarly: false })
            console.log(error.details)
            if (error) {
                const fieldErrors = {};
                error.details.forEach(err => {
                    fieldErrors[err.path[0]] = err.message;
                })
                setErrors(fieldErrors);
            } else {
                setErrors({})
            }
            
        }
    
        const handleSubmit = () => {
            console.log(formDetails)
            const {error} = scheme.validate(formDetails, {abortEarly: false})
            console.log(error)
        }
    
    return {
        formDetails,
        errors,
        handleChange,
        handleSubmit
    }
}