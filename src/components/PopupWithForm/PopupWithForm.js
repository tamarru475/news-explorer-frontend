import React from "react";
export default function PopupWithForm(props) {
    const fadeIn = `${props.isOpen ? "popup_fadein" : ""}`;

    React.useEffect(() => {
        const escKeyClose = (e) => {
            if (e.keyCode === 27) {
                props.onClose();
            }
        }
        window.addEventListener('keydown', escKeyClose)
        return () => window.removeEventListener('keydown', escKeyClose)
    }, [])
    React.useEffect(() => {
        const overlayClose = (e) => {
            if (e.target.classList.contains('popup_fadein')) {
                props.onClose();
            }
        }
        window.addEventListener('mouseup', overlayClose)
        return () => window.removeEventListener('mouseup', overlayClose)
    }, [props.isOpen, props.onClose])

    const onSpanClick = () => {
        if (props.name === 'signin') {
            props.onClose();
            props.openSignupPopup();
        } else if (props.name === 'signup') {
            props.onClose();
            props.openSigninPopup();
        }
    }

    return (
        <section
            className={`popup ${fadeIn}`}
            id={`${props.name}-popup`}
        >
            <div className={`popup__container container `} >
                <button
                    type="button"
                    className={`popup__close-button close-button`}
                    onClick={props.onClose}
                ></button>
                <div className={`popup__form-container`}>
                    <h2 className={`popup__header`}>{props.title}</h2>
                    <form
                        className={`${props.name}__form popup__form form`}
                        name={`${props.name}`}
                        onSubmit={props.onSubmit}
                    >
                        {props.children}
                        <span
                            className={`form__submit-error`}
                        >
                        </span>
                        <fieldset className="form__fieldset-button">
                            <button
                                type="submit"
                                className={`form__button ${props.disabledButtonClass}`}
                                disabled={props.disableButton}
                            >
                                {props.buttonText}
                            </button>
                        </fieldset>
                    </form>
                    <p className='popup__form-link'> or <span className='popup__form-link_span' onClick={onSpanClick}>{props.linkName}</span></p>
                </div>
            </div>
        </section >
    );
}