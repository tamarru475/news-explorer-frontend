import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import backgroundImage from '../../images/phone-backgroung.png';
import logoutIconWhite from '../../images/logout-white.svg';
import { NavLink } from 'react-router-dom';

export default function Header(props) {

    const headerButtonClass = props.isLoggedIn ? 'header__button-profile_white' : 'header__signin-button';
    const headerButtonContent = props.isLoggedIn ? `Elise ` : 'Login';
    const onButtonClick = props.isLoggedIn ? props.onSignoutClick : props.onSigninClick;


    return (
        <header className='header' style={{ background: `url(${backgroundImage}) no-repeat center/cover` }}>
            <div className='header__top-container'>
                <div className='header__logo'>NewsExplorer</div>
                <div className='header__nav-container'>
                    {props.children}
                    <Navigation >
                        <NavLink exact to='/' className='nav__home' activeClassName='nav__link_active'>Home</NavLink>
                        {props.isLoggedIn ? <NavLink to='/saved-news' className='nav__articles' activeClassName='nav__link_active'>Saved articles</NavLink> : ''}
                    </Navigation>
                    <button typre='button' className={headerButtonClass} onClick={onButtonClick}>
                        {headerButtonContent}
                        {props.isLoggedIn ?
                            <img
                                src={logoutIconWhite}
                                alt='logout'
                                className={'savedNewsHeader__nav-logout'}
                                onClick={onButtonClick}
                            />
                            :
                            ''
                        }
                    </button>
                </div>
            </div>
            <div className='header__content-container' >
                <h1 className='header__title'>What's going on in the world?</h1>
                <p className='header__subtitle'>Find the latest news on any topic and save them in your personal account.</p>
                <SearchForm />
            </div>
        </header>
    )
}