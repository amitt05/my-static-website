import React from 'react'
import './Home.css'
import banner from '../../assets/imageSlider/banner.jpg'
import Service from '../Service/Service'
import About from '../About/About'
import Contect from '../contect/Contect'


function Home() {
    return (
        <div className='container' id='home'>
            <div className='imgContainer'>
                <img src={banner} width="100%" />

            </div>



        </div>
    )
}

export default Home