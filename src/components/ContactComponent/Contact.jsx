import React, { useRef } from 'react'
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

//import css
import "./Contact.css"
import Button from '../../Layouts/Buttons/Button';
import sendEmail from "../../assets/images/iconSend.png"
import Image from '../../Layouts/Images/Image';

const Contact = ({ contactRef }) => {
    const form = useRef();
    const { register, handleSubmit, formState, reset } = useForm();

    const onSubmit = (data) => {
        // Use emailjs to send the email
        emailjs
            .sendForm(
                'service_2g31x3o',
                'template_jvt4l2h',
                form.current,
                'CcTJn_nPYZy32Djp2' // Public key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success('Message sent successfully!');
                    reset(); // Reset the form after successful submission
                },
                (error) => {
                    console.log(error.text);
                    toast.error('Failed to send the message. Please try again.');
                }
            );
    };

    const onError = (errors) => {
        console.log(errors);
        toast.error('Please fill out all required fields.');
    }

    const { errors } = formState;
    console.log(errors);
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <section className='contactSection' ref={contactRef}>
                <div className="contantConteiner">
                    <div className="bgPicture">
                        <h1 >Contact Me</h1>
                    </div>
                    <form ref={form} onSubmit={handleSubmit(onSubmit, onError)} className='formSection'>

                        <label htmlFor='firstName' className='textTitleForm'>First name:</label>
                        <input id='firstName' type="text" name="firstName"
                            placeholder="First name"
                            {...register("firstName", {
                                required: "This field is required",
                            })} />
                        <p className='errorTextContact'>{errors.firstName?.message}</p>

                        <label htmlFor='lastName' className='textTitleForm'>Last name:</label>
                        <input id='lastName' type="text"
                            name="lastName" placeholder="Last name"
                            {...register("lastName", {
                                required: "This field is required",
                            })} />
                        <p className='errorTextContact'>{errors.lastName?.message}</p>

                        <label htmlFor='email' className='textTitleForm'>Email:</label>
                        <input id='email' type="email"
                            name="email" placeholder='Email...'
                            {...register("email", {
                                required: "This field is required",
                            })} />
                        <p className='errorTextContact'>{errors.email?.message}</p>

                        <label htmlFor='subject' className='textTitleForm'>Subject:</label>
                        <input id='subject' type="text"
                            name="subject" placeholder='Subject...'
                            {...register("subject", {
                                required: "This field is required",
                            })} />
                        <p className='errorTextContact'>{errors.subject?.message}</p>


                        <label htmlFor='mesng' className='textTitleForm'>Message:</label>
                        <textarea id='mesng' name="message" placeholder='Message...'
                            {...register("message", {
                                required: "This field is required",
                            })} />
                        <p className='errorTextContact'>{errors.message?.message}</p>
                        <div className="btnContent">
                            <Button variant="submit">
                                <p>Send</p>
                                <Image src={sendEmail} variant='submitEmail' />
                            </Button>

                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact