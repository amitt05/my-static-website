import  { useState, useContext } from 'react';
import { contextApi } from '../../useContextApi/useContextApi';
import './Contact.css';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function Contact() {
    const {  location, amitGmail, amitPhone } = useContext(contextApi);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [url, setUrl] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const API_KEY = import.meta.env.VITE_API_KEY;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !email || !message || !number) {
            setError("Please fill in all the details!");
            setSuccessMessage('');
        } else {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('number', number);
            formData.append('url', url);
            formData.append('message', message);
            formData.append("access_key", API_KEY);

            const formObject = Object.fromEntries(formData);
            const json = JSON.stringify(formObject);

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: json,
                });

                const data = await response.json();

                if (data.success) {
                    setSuccessMessage('Your details have been successfully sent!');
                    setError('');
                } else {
                    setError('Something went wrong. Please try again.');
                    setSuccessMessage('');
                }
            } catch{
                setError('Network error. Please try again later.');
                setSuccessMessage('');
            }
        }

        // Reset form fields
        setName('');
        setEmail('');
        setNumber('');
        setUrl('');
        setMessage('');
    };

    return (
        <>
            <h1 className='contentHead' id='contactMe'>Contact Me</h1>
            <div className='ContactContainer'>
                <section className='ContactLeft'>
                    <h2>Lets Talk</h2>
                    <p className='contentParagraph'>
                        Digital marketing is the promotion of products or services through online channels, including social media, search engines, email, and websites. It focuses on reaching a targeted audience to drive engagement and conversions using digital tools and strategies.
                    </p>
                    <div className='contentDetails'>
                        <p><MdOutlineMail /> {amitGmail}</p>
                        <p><FaPhoneAlt /> {amitPhone}</p>
                        <p><IoLocationSharp /> {location}</p>
                    </div>
                </section>

                <form className='ContactRight' onSubmit={handleSubmit}>
                    <div className='inputDiv'>
                        <label htmlFor='name'>Your Name</label>
                        <input
                            type='text'
                            placeholder='Enter Your Name...'
                            id='name'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor='email'>Your Email</label>
                        <input
                            type='email'
                            placeholder='Enter Your Email...'
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor='number'>Phone Number</label>
                        <input
                            type='tel'
                            placeholder='Enter Your Number...'
                            id='number'
                            name='number'
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor='url'>Your Website URL</label>
                        <input
                            type='url'
                            placeholder='https://your-website-url.com'
                            id='url'
                            name='url'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor='message'>Write Your Message</label>
                        <textarea
                            placeholder='Enter Your Message...'
                            id='message'
                            name='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='responseMessages'>
                        <p className='successMessage'>{successMessage}</p>
                        <p className='errorMessage'>{error}</p>
                    </div>

                    <button type='submit' className='contentButton'>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Contact;
