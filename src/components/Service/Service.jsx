import React from 'react'
import service from '../../assets/Object/ServiceObject'
import './service.css'
import { FaArrowRight } from "react-icons/fa6";
import Home from '../home/Home';
import Contect from '../contect/Contect';
import About from '../About/About';
function Service() {
    return (
        <>

            <h1 className='serviceHeading' id='Service'>What we do<span>?</span></h1>
            <div className='main' >
                {
                    service.map((item, index) => {
                        return <div key={index} className='cantainer' >
                            <img src={item.img} className='img' alt='logo' width='100px' />
                            <h1 className='heading'>{item.name}</h1>
                            <div className='title'>{item.title}</div>
                            <button className='SerButton'>{item.button} <FaArrowRight /></button>
                        </div>
                    })
                }

            </div>
        </>
    )
}

export default Service