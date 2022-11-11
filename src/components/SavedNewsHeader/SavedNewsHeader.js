import React from 'react';
import logoutIcon from '../../images/logout.svg';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
export default function SavedNewsHeader(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const fadeInCloseButtonClass = `${props.isOpen ? "savedNewsHeader__nav-button_active" : ""}`;
    const articlesKeywords = props.savedArticlesArray.slice(0, 2).map((article) => article.keyword + ' ,');


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
                        {currentUser.name}
                        <img
                            src={logoutIcon}
                            alt='logout'
                            className='savedNewsHeader__nav-logout'
                            onClick={props.onSignoutClick}
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
                <h5 className='savedNewsHeader__title'>{currentUser.name}, you have {props.savedArticlesArray.length} saved articles</h5>
                <p className='savedNewsHeader__keywords'>By keywords:
                    <span className='savedNewsHeader__keywords-bold'> {articlesKeywords} and {props.savedArticlesArray.length - 2} other</span>
                </p>
            </div>
        </header>
    )
}