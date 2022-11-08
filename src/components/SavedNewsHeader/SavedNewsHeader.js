import React from 'react';
import logoutIcon from '../../images/logout.svg';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';
export default function SavedNewsHeader(props) {

    const fadeInCloseButtonClass = `${props.isOpen ? "savedNewsHeader__nav-button_active" : ""}`;

    function onNavClick() {
        props.onNavClick();
    }

    return (
        <header className='savedNewsHeader'>
            <div className='savedNewsHeader__top-container'>
                <div className='savedNewsHeader__logo'>NewsExplorer</div>
                <div className='savedNewsHeader__nav-container'>
                    <Navigation>
                        <NavLink exact to='/' className='nav__home nav__link_loggedin' activeClassName='nav__link_active-black' >Home</NavLink>
                        <NavLink to='/saved-news' className='nav__articles nav__link_loggedin' exact activeClassName='nav__link_active-black'>Saved articles</NavLink>
                    </Navigation>
                    <button type='button' className='savedNewsHeader__nav-profile'>
                        Elise
                        <img
                            src={logoutIcon}
                            alt='logout'
                            className='savedNewsHeader__nav-logout'
                        />
                    </button>
                </div>
                <div
                    className={`savedNewsHeader__nav-button ${fadeInCloseButtonClass} `}
                    onClick={onNavClick}
                >
                    <div className="savedNewsHeader__nav-button_line"></div>
                    <div className="savedNewsHeader__nav-button_line"></div>
                </div>
                {props.children}
            </div>
            <div className='savedNewsHeader__text-container'>
                <p className='savedNewsHeader__subtext'>Saved articles</p>
                <h5 className='savedNewsHeader__title'>Elise, you have 5 saved articles</h5>
                <p className='savedNewsHeader__keywords'>By keywords:
                    <span className='savedNewsHeader__keywords-bold'> Nature, Yellowstone, and 2 other</span>
                </p>
            </div>
        </header>
    )
}