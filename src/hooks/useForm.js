import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
    const [form, setform] = useState(initialForm)
    const [errors, seterrors] = useState({})
   

    const handleChange = (e) => {
        const {name,value} = e.target

        setform({
            ...form,
            [name]:value
        })
     };
    const handleBlur = (e) => { 
        handleChange(e);
        seterrors(validateForm(form))
    };
    const handleSubmint = (e) => { };

    return {
        form,
        errors,
        handleSubmint,
        handleBlur,
        handleChange
    }


}

