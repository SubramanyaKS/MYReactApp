import { useState } from "react";
import emailjs from '@emailjs/browser';

export const useFormData = ()=>{
    const [formData, setFormData] = useState({ name: "", subject: "", email: "", message: "" });

    const sendEmail = (e) => {
        e.preventDefault();
       
        const templateParams = {
            name: formData.name,
            body: formData.message,
            subject: formData.subject,
            email: formData.email,
        }
        // var data = details;
        emailjs.send(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, templateParams, import.meta.env.VITE_APP_PUBLIC_KEY)
            .then((result) => {
                // console.log("Result",result.text);
                alert("Thank You")
                setFormData({ name: "", subject: "", email: "", message: "" })
            }, (error) => {
                // console.log("Error",error);
                alert("Error")
            });
        e.target.reset();
    };
    const handleChange = (name, value) => {
        // console.log(value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }  
    
    return {formData,handleChange,sendEmail}
}