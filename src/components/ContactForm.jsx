import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const containVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  }

  
const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  }

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email:"",
        message:"",
    })

    const [errors, setErrors] = useState({});

    const [isSending, setIsSending] = useState(false);

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const validate = ()=>{
        let errors = {};
        if(!formData.name) errors.name = "Name is Required";
        if(!formData.email) {
            errors.email = "Email is Required"
        }
        else if(!/\S+@\S+/.test(formData.email)){
            errors.email = "Email is Invalid"
        }
        if(!formData.message) errors.message = "Message is Required";

        return errors;
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
        }
        else {
            setErrors({});
            setIsSending(true);

            emailjs
                .send(
                    "service_xfn5cmj",
                    "template_6qu8oen",
                    formData,
                    "Vo-SK2bTPwSm4rxAk"
                )
                .then((response)=>{
                    console.log("SUCCESS!", response.status, response.text);
                    toast.success("Message sent Successfully");
                    setFormData({name: "", email: "", message: "",});
                })
                .catch((error)=>{
                    console.log("Failed...", error);
                    toast.error("Failed to send message. Please try again later");
                })
                .finally(()=>{
                    setIsSending(false)
                })
        }
    }

  return (
    <div id='contact' className='mx-auto max-w-3xl p-4 '>
        <Toaster />
        <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={containVariants}
        viewport={{once:false}}
        className='text-center my-8 text-4xl font-semibold tracking-tighter'>
            Let's Connect
        </motion.h2>
        <motion.form
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{once:false}}
        onSubmit={handleSubmit} action="">
            <div className="mb-4">
                <input type="text" id='name' name="name" onChange={handleChange} value={formData.name} placeholder='Name' className="mb-8 w-full appearence-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none" />
                {errors.name && (
                    <p className='text-sm text-pink-700'>{errors.name}</p>
                )}
            </div>
            <div className="mb-4">
                <input type="email" id='email' name="email" onChange={handleChange} value={formData.email} placeholder='Email' className="mb-8 w-full appearence-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none" />
                {errors.email && (
                    <p className='text-sm text-pink-700'>{errors.email}</p>
                )}
            </div>
            <div className="mb-4">
                <textarea id='message' name="message" onChange={handleChange} value={formData.message} placeholder='Message' className="mb-8 w-full appearence-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none" rows="4" />
                {errors.message && (
                    <p className='text-sm text-pink-700'>{errors.message}</p>
                )}
            </div>
            <button type='submit' className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={isSending} >
                {isSending ? "Sending..." : "Send"}

            </button>
        </motion.form>
    </div>
  )
}

export default ContactForm