import React from "react";
import {
  GenericButton,
  GoogleSigninButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  generic: "generic",
  google: "google-signin-button",
  inverted: "inverted-button",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.generic) =>
  ({
    [BUTTON_TYPE_CLASSES.generic]: GenericButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSigninButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ buttonType, children, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
