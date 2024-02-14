import React, { useState } from 'react'


//import css
import "./ContactMe.css"

import { FaCheck } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";


const ContactMe = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
    });

    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [requiredMessage, setRequiredMessage] = useState("");

    const [errorMessageFullName, setErrorMessageFullName] = useState("");
    const [messageType, setMessageType] = useState("");

    const [errorMessageEmail, setErrorMessageEmail] = useState("");
    const [messageTypeEmail, setMessageTypeEmail] = useState("");

    const [errorMessageSubject, setErrorMessageSubject] = useState("");
    const [messageTypeSubject, setMessageTypeSubject] = useState("");

    const [messageTypeMessage, setMessageTypeMessage] = useState("");
    const [errorMessageMessage, setErrorMessageMessage] = useState("");




    const validateFullName = () => {
        const fullNameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
        if (!formData.fullName.trim()) {
            setRequiredMessage("Its required");
            setErrorMessageFullName("");
            setSuccessMessage("");
            setMessageType("required");
            return false;
        }
        if (!fullNameRegex.test(formData.fullName)) {
            setErrorMessageFullName("You have to input your name. For example, 'John Doe' not 'john doe'. Your first letter of your first and last name must be capitalized!!");
            setRequiredMessage("");
            setSuccessMessage("");
            setMessageType("error");
            return false;
        }
        setErrorMessageFullName("");
        setRequiredMessage("");
        setSuccessMessage("Good! You input is correct!");
        setMessageType("success");
        return true;


    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim()) {
            setRequiredMessage("Its required");
            setErrorMessageEmail("");
            setSuccessMessage("");
            setMessageTypeEmail("required");
            return false;
        }

        if (!emailRegex.test(formData.email)) {
            setErrorMessageEmail("Please enter a valid email address, for example, 'joedoe@gmail.com'");
            setRequiredMessage("");
            setSuccessMessage("");
            setMessageTypeEmail("error");
            return false;
        }

        setErrorMessageEmail("");
        setRequiredMessage("");
        setSuccessMessage("Good! You input is correct!");
        setMessageTypeEmail("success");
        return true;
    };

    const validateSubject = () => {
        const subjectRegex = /^[A-Z][a-zA-Z0-9 ]{5,}$/;

        if (!formData.subject.trim()) {
            setErrorMessageSubject("Subject is required");
            setSuccessMessage("");
            setRequiredMessage("");
            setMessageTypeSubject("required");
            return false;
        }

        if (!subjectRegex.test(formData.subject)) {
            setErrorMessageSubject("Subject must start with a capital letter and be at least 6 characters long");
            setSuccessMessage("");
            setRequiredMessage("");
            setMessageTypeSubject("error");
            return false;
        }

        setErrorMessageSubject("");
        setSuccessMessage("Good! You input is correct!");
        setRequiredMessage("");
        setMessageTypeSubject("success");
        return true;
    };

    const validateMessage = () => {
        if (!formData.message.trim()) {
            setErrorMessageMessage("Message is required");
            setSuccessMessage("");
            setRequiredMessage("");
            setMessageTypeMessage("required");
            return false;
        }

        if (formData.message.length < 15) {
            setErrorMessageMessage("Message must be at least 15 characters long");
            setSuccessMessage("");
            setRequiredMessage("");
            setMessageTypeMessage("error");
            return false;
        }

        setErrorMessageMessage("");
        setSuccessMessage("Good! You input is correct!");
        setRequiredMessage("");
        setMessageTypeMessage("success");
        return true;
    };


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        // Proveravamo da li su svi podaci ispravni
        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();

        if (isFullNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            // Logika za rukovanje sa ispravnim unosom
            setRequiredMessage("");

        } else {
            // Ako nije ništa napisano, postavljamo required poruku
            setRequiredMessage("Please fill in all the required fields");
        }
    };
    return (
        <article className="content-Contact" /* ref={contactRef} */>
            <div className="contant-konteiner">
                <div className="bg-picture">
                    <h1>Contact Me</h1>
                </div>

                <form className='form-Contact' onSubmit={handleSubmit}>
                    <label htmlFor='fulnmn'>Full Name:</label>
                    <input id='fulnmn'
                        type="text"
                        name="fullName"
                        placeholder='Full Name...'
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <br />
                    {submitting && (
                        <>
                            {messageType === "success" && (
                                <div className="success-message">{successMessage} <FaCheck className='icon-succes' /></div>
                            )}
                            {messageType === "required" && (
                                <div className="required-message">{requiredMessage} <MdOutlineError className='icon-required' /></div>
                            )}
                            {messageType === "error" && (
                                <div className="error-message">{errorMessageFullName} <MdOutlineError className='icon-error' /></div>
                            )}
                        </>
                    )}

                    <label htmlFor='email'>Email:</label>
                    <input id='email'
                        type="email"
                        name="email"
                        placeholder='Email...'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <br />
                    {submitting && (
                        <>
                            {messageTypeEmail === "success" && (
                                <div className="success-message">{successMessage} <FaCheck className='icon-succes' /></div>
                            )}
                            {messageTypeEmail === "required" && (
                                <div className="required-message">{requiredMessage} <MdOutlineError className='icon-required' /></div>
                            )}
                            {messageTypeEmail === "error" && (
                                <div className="error-message">{errorMessageEmail} <MdOutlineError className='icon-error' /></div>
                            )}
                        </>
                    )}
                    <label htmlFor='subject'>Subject:</label>
                    <input id='subject'
                        type="text"
                        name="subject"
                        placeholder='Subject...'
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    <br />
                    {submitting && (
                        <>
                            {messageTypeSubject === "success" && (
                                <div className="success-message">{successMessage} <FaCheck className='icon-succes' /></div>
                            )}
                            {messageTypeSubject === "required" && (
                                <div className="required-message">{errorMessageSubject} <MdOutlineError className='icon-required' /></div>
                            )}
                            {messageTypeSubject === "error" && (
                                <div className="error-message">{errorMessageSubject} <MdOutlineError className='icon-error' /></div>
                            )}
                        </>
                    )}
                    <label htmlFor='mesng'>Message:</label>
                    <textarea id='mesng'
                        name="message"
                        placeholder='Message...'
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <br />
                    {submitting && (
                        <>
                            {messageTypeMessage === "success" && (
                                <div className="success-message">{successMessage} <FaCheck className='icon-succes' /></div>
                            )}
                            {messageTypeMessage === "required" && (
                                <div className="required-message">{errorMessageMessage} <MdOutlineError className='icon-required' /></div>
                            )}
                            {messageTypeMessage === "error" && (
                                <div className="error-message">{errorMessageMessage} <MdOutlineError className='icon-error' /></div>
                            )}
                        </>
                    )}


                    <br />
                    <button className='contact-SubmiBtn' type="submit">Submit</button>
                </form>
            </div>


        </article>
    )
}

export default ContactMe
