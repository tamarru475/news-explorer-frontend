import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function EditProfilePopup(props) {
    const [values, setValues] = React.useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = React.useState({
        email: '',
        password: '',
    });
    const [isValid, setIsValid] = React.useState(false);
    const [disableButton, setDisableButton] = React.useState(true);


    const disabledButtonClass = `${!disableButton ? "" : "popup__form-button_disabled"
        }`;

    const showErrorMessageClass = `${isValid ? "" : "form__input-error_active"
        }`;

    const showErrorInputClass = `${isValid ? "" : "form__input_type_error"
        }`;


    React.useEffect(() => {
        setValues({
            email: '',
            password: '',
        });
        setErrors({
            email: '',
            password: '',
        });
        setIsValid(true);
        setDisableButton(true)
    }, [props.isOpen]);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
        setDisableButton(isValid ? false : true);
    };


    function handleSubmit(e) {
        e.preventDefault();
        props.onSignin(values);

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
            submitError={props.submitError}
        >
            <fieldset className="signin__form-fieldset">
                <label className='signin__form-lable signin__form-lable-email '>Email</label>
                <input
                    className={`signin__form-input ${showErrorInputClass}`}
                    type="email"
                    id="signin-email-input"
                    placeholder="Enter email"
                    name="email"
                    value={values.email || ''}
                    onChange={handleChange}
                    required
                />
                <span
                    className={`signin__form-input-error  ${showErrorMessageClass}`}
                >
                    {errors.email}
                </span>
                <label className='signin__form-lable signin__form-lable-password'>Password</label>
                <input
                    className={`signin__form-input ${showErrorInputClass}`}
                    type="password"
                    id="signin-password-input"
                    placeholder="Enter password"
                    name="password"
                    value={values.password || ''}
                    onChange={handleChange}
                    required
                />
                <span
                    className={`signin__form-input-error ${showErrorMessageClass}`}
                >
                    {errors.password}
                </span>
            </fieldset>
        </PopupWithForm>
    );
}