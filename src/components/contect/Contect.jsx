import React, { useState, useContext, useEffect } from 'react'
import { contextApi } from '../../useContextApi/useContextApi'
import './Contect.css'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";


function Contect() {
    const { vikasGmail, vikasPhone, location, amitGmail, amitPhone, koushalPhone } = useContext(contextApi)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [url, setUrl] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [sendmessage, setSendmessage] = useState('')
    const APIKEY = import.meta.env.VITE_API_KEY

    const onSubmit = async (event) => {
        event.preventDefault();
        if (name.length == 0 || email.length == 0 || message.length == 0 || number.length == 0) {
            setError("Fill your details!")
            setSendmessage('')
        } else {
            const formData = new FormData();
            formData.append('name', name)
            formData.append('email', email)
            formData.append('number', number)
            formData.append('url', url)
            formData.append('message', message)



            // console.log(event.target['name'])
            // console.log(event.target.value)

            formData.append("access_key", `${APIKEY}`);

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());
            // console.log(json)
            // if (res.success) {
            //     alert("Success", res.message);
            // }
            setSendmessage('Successfully sent your details. !')
            setError('')
        }
        setName('')
        setEmail('')
        setNumber('')
        setUrl('')
        setMessage('')

    };


    return (
        <>
            <h1 className='contentHead' id='contactMe'>Contact Me</h1>
            <div className='ContectCantener'>
                <section className='ContectLeft'>
                    <h2>Let's talk</h2>
                    <p className='contentPera'>Digital marketing is the promotion of products or services through online channels, including social media, search engines, email, and websites. It focuses on reaching a targeted audience to drive engagement and conversions using digital tools and strategies.</p>
                    <div className='contentDetail'>
                        <p><MdOutlineMail />{amitGmail}</p>
                        <p><FaPhoneAlt />{amitPhone}</p>
                        <p><IoLocationSharp />{location}</p>
                    </div>
                </section>

                <form className='contectRight' onSubmit={onSubmit}>
                    <div className='ditaldiv'>
                        <label htmlFor='name'>Your Name</label>
                        <input type='text ' placeholder='Enter Your Name...' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='ditaldiv'>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' placeholder='Enter Your email...' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='ditaldiv'>
                        <label htmlFor='number'>Number</label>
                        <input type='number' placeholder='Enter Your Number...' id='number' name='number' value={number} onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    <div className='ditaldiv'>
                        <label htmlFor='url'>Your Website URL</label>
                        <input type='url' placeholder='https://portfolio-website-xi-henna.vercel.app/?' id='url' name='url' value={url} onChange={(e) => setUrl(e.target.value)} />
                    </div>
                    <div className='ditaldiv'>
                        <label htmlFor='message'>Write Your Message here</label>
                        <textarea placeholder='Enter Your Message...' id='message' name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className='errorMessage'>
                        <p className='sendData'>{sendmessage}</p>
                        <p className='error'>{error}</p>
                    </div>

                    <button type='submit' className='contentBtn'>Submit</button>


                </form>


            </div>
        </>
    )
}

export default Contect