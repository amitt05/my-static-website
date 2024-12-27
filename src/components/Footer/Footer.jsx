import React from 'react'
import "./Footer.css"
import footerlogo from "../../assets/image/icon1.jpeg"
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


function Footer() {
    return (
        <>
            <footer className='FooterCantainer'>
                <section className='footerLeft'>
                    <div className='footerImgDiv'>
                        <img src={footerlogo} alt='logo' className='footerImg' width='50px' />
                        <h1 className='footerhead'><span>Help</span>Indika</h1>
                    </div>


                </section>
                <p className='footerCopyRight'>&copy; Helpindka 2024</p>
                <section className='footerRight'>

                    <a href='https://www.instagram.com/helpindika/' target='_blank'><RiInstagramFill /></a>
                    <a href='https://www.linkedin.com/company/100538047/' target='_blank'><FaLinkedin /></a>
                    <a href='https://x.com/helpindika' target='_blank'><FaXTwitter /></a>
                    <a href='https://www.facebook.com/helpindika' target='_blank'><FaFacebookSquare /></a>

                </section>
            </footer>
        </>
    )
}

export default Footer