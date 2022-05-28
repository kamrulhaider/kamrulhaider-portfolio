import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [success, setSuccess] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0lwu14f', 'contact_form', form.current, 'user_85PaPW5LCDJ4JNZjWlDKV')
            .then((result) => {
                if (result.text === "OK") {
                    setSuccess("successful")
                }
            }, (error) => {
                if (error.text) {
                    setSuccess("error, try again please or send email to kamrulhaider.ssb@gmail.com")
                }
            });
        e.target.reset();

    };

    return (
        <div className="container my-5">
            <div className="d-flex flex-column align-items-center mb-3">
                <h2 className="fw-bold text-center title-color mb-0">Contact me</h2>
                <hr />
                <p className="text-center subTitle-color">You can contact me by the form below or send email to kamrulhaider.ssb@gmail.com</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form className='myEmailForm' ref={form} onSubmit={sendEmail}>
                        <label className='h6 fw-bold text-center title-color'>Your Name</label>
                        <input required type="text" name="user_name" />
                        <label className='h6 fw-bold text-center title-color'>Your Email</label>
                        <input required type="email" name="user_email" />
                        <label className='h6 fw-bold text-center title-color'>Message</label>
                        <textarea required name="message" />
                        <button className='btn myMenu3 m-auto' type="submit">Send</button>
                    </form>
                    <h6 className='text-success text-center mb-0'>{success}</h6>
                </div>
            </div>
        </div>
    );
};

export default Contact;