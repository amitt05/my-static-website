import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'
import error from '../assets/image/error.png'

function Error() {
    return (
        <div className='errro'>
            <img src={error} width='60%' />
            <p className='errorPera'> <Link to='/' style={{ textDecoration: "none" }}>Home page...</Link></p>
        </div>
    )
}

export default Error