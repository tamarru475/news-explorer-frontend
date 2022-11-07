import React from "react";
import PopupWithForm from "./PopupWithForm";
import ValidationContext from '../../contexts/ValidationContext';

export default function EditProfilePopup(props) {
    const errorMessages = React.useContext(ValidationContext);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [disableButton, setDisableButton] = React.useState(true);
    const [isEmailValid, setIsEmailValid] = React.useState(false);
    const [isPasswordValid, setIsPasswordValid] = React.useState(false);
    const disabledButtonClass = `${!disableButton ? "" : "form__button_disabled"
        }`;

    const showErrorMessageClass = `${props.isValid ? "" : "form__input-error_active"
        }`;

    const showErrorInputClass = `${props.isValid ? "" : "form__input_type_error"
        }`;


    const onEmailChange = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length === 0) {
            setEmailError(`${errorMessages.emptyField}`);
            props.onValidityChange(false);
            setDisableButton(true);
            setIsEmailValid(false);
        } else {
            setEmailError("");
            setIsEmailValid(true);
            checkFormsVlidation();
        }
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length === 0) {
            props.onValidityChange(false);
            setPasswordError(`${errorMessages.emptyField}`);
            setDisableButton(true);
            setIsPasswordValid(false);
        } else {
            setIsPasswordValid(true);
            setPasswordError("");
            checkFormsVlidation();
        }
    };

    const checkFormsVlidation = () => {
        if (isPasswordValid && isEmailValid) {
            props.onValidityChange(true);
            setDisableButton(false);
        }
    }


    function handleSubmit(e) {
        e.preventDefault();
        props.onSignin({
            email: email,
            password: password,
        });
    }
    return (
        <PopupWithForm
            name="signin"
            title="Sign in"
            isOpen={props.isOpen}
            onClose={props.onClose}
            buttonText="Sign in"
            onSubmit={handleSubmit}
            linkName="Sign up"
            openSignupPopup={props.openSignupPopup}
            openSigninPopup={props.openSigninPopup}
            disabledButtonClass={disabledButtonClass}
            disableButton={disableButton}
        >
            <fieldset className="form__fieldset">
                <label className='form__input-lable'>Email</label>
                <input
                    className={`form__input ${showErrorInputClass}`}
                    type="email"
                    id="signin-email-input"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={onEmailChange}
                />
                <span
                    className={`form__input-error email-input-error ${showErrorMessageClass}`}
                >
                    {emailError}
                </span>
                <label className='form__input-lable'>Password</label>
                <input
                    className={`form__input ${showErrorInputClass}`}
                    type="password"
                    id="signin-password-input"
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={onPasswordChange}
                />
                <span
                    className={`form__input-error password-input-error ${showErrorMessageClass}`}
                >
                    {passwordError}
                </span>
            </fieldset>
        </PopupWithForm>
    );
}