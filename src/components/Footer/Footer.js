import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {

    return (
        <footer className='footer'>
            <p className='footer__credit'>© 2021 Supersite, Powered by News API</p>
            <ul className='footer__links-list'>
                <li className='footer__links-link'>
                    <Link to='/' className='footer__links-home'>Home</Link>
                    <a href='https://practicum.yandex.com/' target="_blank" rel="noopener noreferrer" className='footer__links-practicum'>Practicum</a>
                </li>
                <li className='footer__links-social'>
                    <a href='https://github.com/tamarru475' target="_blank" rel="noopener noreferrer" className='footer__links-github'>
                    </a>
                    <a href='https://www.facebook.com/tamar.rubin.9' target="_blank" rel="noopener noreferrer" className='footer__links-facebook'>
                    </a>
                </li>
            </ul>
        </footer>
    )
}