import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {

    return (
        <footer className='footer'>
            <p className='footer__credit'>© 2021 Supersite, Powered by News API</p>
            <ul className='footer__links-list'>
                <li className='footer__links-link'>
                    <Link to='/' className='footer__links-home'>Home</Link>
                </li>
                <li className='footer__links-link'>
                    <a href='#' className='footer__links-practicum'>Practicum</a>
                </li>
                <li className='footer__links-social'>
                    <a href='#' className='footer__links-github'>
                    </a>
                    <a href='#' className='footer__links-facebook'>
                    </a>
                </li>
            </ul>
        </footer>
    )
}