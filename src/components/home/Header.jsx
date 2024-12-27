import React, { useRef, useState } from 'react'
import icon from '../../assets/image/icon1.jpeg'
import { Link } from 'react-scroll'
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Home() {

    const [menu, setMenu] = useState("home")
    const menuRef = useRef()
    const openMenu = () => {
        menuRef.current.style.right = '0px'
    }
    const closeMenu = () => {
        menuRef.current.style.right = '-350px'
    }

    return (

        <div className='header'>
            <div className='logo'>
                <img src={icon} alt='logo' className='icon' width="60px" />
                <p className='name'><span>Help</span>Indika</p>
            </div>
            <div className='navMoblie' onClick={openMenu}><GiHamburgerMenu /></div>
            <ul ref={menuRef} className='menu'>
                <span className='closeBtn' onClick={closeMenu}><IoMdClose /></span>
                <li > <Link to="home" spy={true} offset={-100} smooth={true} duration={500} style={{ textDecoration: "none" }} onClick={() => setMenu("home")}>Home</Link> {menu === "home" && <hr className={"menuhr"} />}</li>
                <li >  <Link to="Service" spy={true} smooth={true} offset={-50} duration={500} style={{ textDecoration: "none" }} onClick={() => setMenu("service")}> Service</Link> {menu === "service" && <hr className={"menuhr"} />}</li>
                <li >  <Link to="About" spy={true} smooth={true} offset={-70} duration={500} style={{ textDecoration: "none" }} onClick={() => setMenu("about")}> About Us</Link> {menu === "about" && <hr className={"menuhr"} />}</li>
                <li >  <Link to="contactMe" spy={true} smooth={true} offset={-50} duration={500} style={{ textDecoration: "none" }} onClick={() => setMenu("contact")}>Contact</Link> {menu === "contact" && <hr className={"menuhr"} />}</li>

            </ul>
            <Link to='contactMe' className='contect' spy={true} smooth={true} offset={-50} duration={500}>Contact Me</Link>



        </div>

    )
}

export default Home
