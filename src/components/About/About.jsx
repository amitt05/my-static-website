import React from 'react'
import './About.css'
import aboutImg from "../../assets/image/digital.png"

const About = () => {
  return (
    <>
      <main>
        <h1 className='aboutHead' id='About'>About us</h1>
        <section className='aboutDetail'>
          <img src={aboutImg} width='50%' className='aboutImg' />
          <div className='about'>
            <h2>HelpIndiKa Your Digital Growth Partner</h2>
            <p className='aboutPera'>At HelpIndika, our journey began with a vision to enhance the digital presence of businesses large and small. Founded In 2024, we started as a small team of passionate marketers who understood the potential of online visibility. Over the years, we have evolved into a full-fledged digital marketing agency, consistently adapting to the ever-changing landscape of digital trends. Our success is rooted in our perseverance, innovative spirit, and dedication to providing exceptional services that drive results.
            </p>
          </div>
        </section>

      </main>
    </>
  )
}

export default About