import React, { useEffect, useState } from 'react'
import './Image.css'
import data from '../../assets/Object/imageSlider'
import banner from '../../assets/imageSlider/banner.jpg'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Image() {
    const [slider, setSlider] = useState(0)
    const [isHovered, setIsHovered] = useState(false);
    const handleLeft = () => {
        setSlider(slider === 0 ? data.length - 1 : slider - 1)
    }
    const handleRight = () => {
        setSlider(slider === data.length - 1 ? 0 : slider + 1)
    }

    useEffect(() => {
        const sliderClear = setInterval(() => {
            if (!isHovered) {
                handleRight()
            }

        }, 2500)
        return () => clearInterval(sliderClear)
    }, [slider, isHovered, data.length])
    return (
        <div className='imageCatener'>

            {/* <div className='div'>
                <img src={banner} width='100%' />
            </div> */}

            <div className='wrapper'>
                <div className='imageHeading'>
                    HelpIndiKa: <span className='animation'>Your Digital Growth Partner</span>
                </div>
            </div>

            <div className='sliderImg'>
                <img src={data[slider].img} alt='' width='60%' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />
                <p className='dataPera'>{data[slider].content}</p>
                <div className='imageBtn'>
                    <button onClick={handleLeft}><FaArrowLeftLong /></button>
                    <button onClick={handleRight}><FaArrowRight /></button>
                </div>
            </div>

        </div>
    )
}

export default Image