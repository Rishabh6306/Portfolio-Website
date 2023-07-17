import React, { useState } from 'react';

export default function Contact() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        // You can access the form values using the state variables (fullName, email, subject, message)
    };

    return (
        <div id='contact'>
            <h2 id='heading'>Contact  <span>Me</span></h2>
            <form onSubmit={handleSubmit} method="POST" >
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
        </div>
    );
}