import React from 'react';

export default function NavPopup(props) {
    const navPopupActiveClass = props.isOpen ? 'navPopup_active' : '';
    const fadeInCloseButtonClass = `${props.isOpen ? "header__button_active" : ""}`;

    function onNavClick() {
        props.onNavClick();
    }

    return (
        <div className={`navPopup ${navPopupActiveClass}`}>
            <div
                className={`navPopup__button ${fadeInCloseButtonClass} `}
                onClick={onNavClick}
            >
                <div className="navPopup__button-line"></div>
                <div className="navPopup__button-line"></div>
            </div>
        </div>
    )
}