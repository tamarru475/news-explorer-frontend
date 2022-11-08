import React from "react";
export default function PopupWithForm({ onClose, isOpen, linkName, onSubmit, openSigninPopup,
    name, openSignupPopup, title, disabledButtonClass, disableButton, buttonText, children }) {
    const fadeIn = `${isOpen ? "popup_fadein" : ""}`;

    React.useEffect(() => {
        const escKeyClose = (e) => {
            if (e.keyCode === 27) {
                onClose();
            }
        }
        window.addEventListener('keydown', escKeyClose)
        return () => window.removeEventListener('keydown', escKeyClose)
    }, [onClose])
    React.useEffect(() => {
        const overlayClose = (e) => {
            if (e.target.classList.contains('popup_fadein')) {
                onClose();
            }
        }
        window.addEventListener('mouseup', overlayClose)
        return () => window.removeEventListener('mouseup', overlayClose)
    }, [onClose])

    const onSpanClick = () => {
        if (name === 'signin') {
            onClose();
            openSignupPopup();
        } else if (name === 'signup') {
            onClose();
            openSigninPopup();
        }
    }

    return (
        <section
            className={`popup ${fadeIn}`}
            id={`${name}-popup`}
        >
            <div className={`popup__container container `} >
                <button
                    type="button"
                    className={`popup__close-button close-button`}
                    onClick={onClose}
                ></button>
                <div className={`popup__form-container`}>
                    <h2 className={`popup__header`}>{title}</h2>
                    <form
                        className={`${name}__form popup__form form`}
                        name={`${name}`}
                        onSubmit={onSubmit}
                    >
                        {children}
                        <span
                            className={`form__submit-error`}
                        >
                        </span>
                        <fieldset className="form__fieldset-button">
                            <button
                                type="submit"
                                className={`form__button ${disabledButtonClass}`}
                                disabled={disableButton}
                            >
                                {buttonText}
                            </button>
                        </fieldset>
                    </form>
                    <p className='popup__form-link'> or <span className='popup__form-link_span' onClick={onSpanClick}>{linkName}</span></p>
                </div>
            </div>
        </section >
    );
}