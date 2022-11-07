import React from 'react';

export default function InfoTooltip(props) {
    const wrapperRef = React.useRef(null);
    const fadeIn = `${props.isOpen ? "popup_fadein" : ""}`;

    const overlayClose = (e) => {
        if (!wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            props.onClose();
        }
    }
    const escKeyClose = (e) => {
        if (e.keyCode === 27) {
            props.onClose();
        }
    }
    React.useEffect(() => {
        window.addEventListener('keydown', escKeyClose)
        return () => window.removeEventListener('keydown', escKeyClose)
    }, [])
    React.useEffect(() => {
        window.addEventListener('mouseup', overlayClose)
        return () => window.removeEventListener('mouseup', overlayClose)
    }, [])

    const onLinkClick = () => {
        props.onClose();
        props.openSigninPopup();
    }

    return (
        <section
            className={` infotoolstip infotoolstip__popup ${fadeIn}`}
            id="infotoolstip-popup"
        >
            <div className={`infotoolstip__container container`} ref={wrapperRef}>
                <button
                    type="button"
                    className={`infotoolstip__close-button close-button`}
                    onClick={props.onClose}
                ></button>
                <div className={`infotoolstip__content-container`}>
                    <h3 className="infotoolstip__message">Registration successfully completed!</h3>
                    <p className='infotoolstip__link' onClick={onLinkClick}>Sign in</p>
                </div>
            </div>
        </section>
    );

}