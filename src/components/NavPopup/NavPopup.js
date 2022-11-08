import React from 'react';
import logoutIconWhite from '../../images/logout-white.svg';
import { NavLink } from 'react-router-dom';

export default function NavPopup(props) {
    const navPopupActiveClass = props.isOpen ? 'navPopup_fadein' : '';
    const headerButtonClass = props.isLoggedIn ? 'navPopup__button-profile_white' : 'navPopup__signin-button';
    const headerButtonContent = props.isLoggedIn ? `Elise ` : 'Login';
    const buttonFunctionOption = props.isLoggedIn ? props.onSignoutClick : props.onSigninClick
    const fadeInCloseButtonClass = `${props.isOpen ? "header__nav-button_active" : ""}`;

    function onNavClick() {
        props.onNavClick();
    }

    function onButtonClick() {
        props.onNavClick();
        buttonFunctionOption();
    }

    return (
        <div className={`navPopup ${navPopupActiveClass}`}>
            <div className='navPopup__top-container'>
                <div className='header__logo'>NewsExplorer</div>
                <div
                    className={`header__nav-button ${fadeInCloseButtonClass} `}
                    onClick={onNavClick}
                >
                    <div className="header__nav-button_line"></div>
                    <div className="header__nav-button_line"></div>
                </div>
            </div>
            <div className='navPopup__container'>

                <NavLink exact to='/' className='navPopup__link'>Home</NavLink>
                {props.isLoggedIn ? <NavLink to='/saved-news' className='navPopup__link'>Saved articles</NavLink> : ''}

                <button type='button' className={headerButtonClass} onClick={onButtonClick}>
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
    )
}