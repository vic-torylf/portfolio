import React, { useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('job_email', 'template_n4m31fi', form.current, 'user_Qm23CknzT6gNVZ6kyBV9X')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return (
        <>  
            <Navbar />
            <div id="contact">
                <h1>Get in touch</h1>
                <div id="form">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="upper-form">
                            <input className="input" type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="upper-form">
                            <input className="input" type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="lower-form">
                            <input className="input" name="subject" placeholder="Subject" />
                        </div>
                        <div className="lower-form">
                            <textarea name="message" placeholder="Message" />
                        </div>
                        <div className="submit">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
};