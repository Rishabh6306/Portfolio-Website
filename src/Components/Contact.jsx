import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export default function Contact() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            emailjs.init('PtQqMRRMxLowR4Hr2'); // Replace with your EmailJS user ID

            const emailParams = {
                to_email: 'rishabhsrivastav722@gmail.com', // Replace with the recipient email address
                from_name: fullName,
                from_email: email,
                email_subject: subject,
                email_message: message
            };

            const result = await emailjs.send(
                'service_2jgi4wf',
                'template_xiilvll',
                emailParams,
                'PtQqMRRMxLowR4Hr2'
            );

            console.log(result.text);

            // Show success toast
            toast('Form Succefully Submitted');
        } catch (error) {
            console.log(error.text);

            // Show error toast
            toast('Faild to Submit');
        }
    };


    return (
        <div id='contact'>
            <h2 id='heading'>Contact <span>Me</span></h2>
            <form ref={form} onSubmit={sendEmail}>
                <input
                    type="text"
                    placeholder="Full Name" required
                    value={fullName} name="Name"
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email Address" required
                    value={email} name="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email Subject" required
                    value={subject} name='Subject'
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea value={message}
                    onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' required name="Message" cols="50" rows="7"></textarea>
            <button type="submit" id='submit-btn'>Submit</button>
            </form>
            <ToastContainer position='top-center' id="toaster" />
        </div>
    );
}