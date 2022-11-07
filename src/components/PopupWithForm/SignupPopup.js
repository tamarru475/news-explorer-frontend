import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import ValidationContext from '../../contexts/ValidationContext';

export default function EditProfilePopup(props) {
    const errorMessages = React.useContext(ValidationContext);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [usernameError, setUsernameError] = React.useState("");
    const [disableButton, setDisableButton] = React.useState(true);
    const [isEmailValid, setIsEmailValid] = React.useState(false);
    const [isPasswordValid, setIsPasswordValid] = React.useState(false);
    const [isUsernamelValid, setIsUsernamelValid] = React.useState(false);

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
            setPasswordError(`${errorMessages.emptyField}`);
            props.onValidityChange(false);
            setDisableButton(true);
            setIsPasswordValid(false);
        } else if (e.target.value.length < 8) {
            setPasswordError(`${errorMessages.toShort}`);
            props.onValidityChange(false);
            setDisableButton(true);
            setIsPasswordValid(false);
        } else {
            setPasswordError("");
            setIsPasswordValid(true);
            checkFormsVlidation();
        }
    };

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
        if (e.target.value.length === 0) {
            setUsernameError(`${errorMessages.emptyField}`);
            props.onValidityChange(false);
            setDisableButton(true);
            setIsUsernamelValid(false);
        } else if (e.target.value.length < 2) {
            setUsernameError(`${errorMessages.toShort}`);
            props.onValidityChange(false);
            setDisableButton(true);
            setIsUsernamelValid(false);
        } else {
            setUsernameError("");
            setIsUsernamelValid(true);
            checkFormsVlidation();
        }
    }

    const checkFormsVlidation = () => {
        if (isPasswordValid && isEmailValid && isUsernamelValid) {
            props.onValidityChange(true);
            setDisableButton(false);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.openInfoToolsTip();
        // props.onSignup({
        //     email: email,
        //     password: password,
        //     username: username,
        // });
    }
    return (
        <PopupWithForm
            name="signup"
            title="Sign up"
            isOpen={props.isOpen}
            onClose={props.onClose}
            buttonText="Sign up"
            onSubmit={handleSubmit}
            linkName="Sign in"
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
                    id="signup-email-input"
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
                    id="signup-password-input"
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
                <label className='form__input-lable'>Username</label>
                <input
                    className={`form__input ${showErrorInputClass}`}
                    type="text"
                    id="signup-username-input"
                    placeholder="Enter your username"
                    name="username"
                    value={username}
                    onChange={onUsernameChange}
                />
                <span
                    className={`form__input-error username-input-error ${showErrorMessageClass}`}
                >
                    {usernameError}
                </span>
            </fieldset>
        </PopupWithForm>
    );

}