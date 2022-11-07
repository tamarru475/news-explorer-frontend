import React from "react";
const ValidationContext = React.createContext();

export const errorMessages = {
    emptyField: "Please fill out this field.",
    toShort:
        "Please lengthen this text.",
    notUrl: "Please enter a URL.",
    notValidEmail: "please enter a valid email.",
};

export default ValidationContext;