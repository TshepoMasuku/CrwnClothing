import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SigninContainer, Header, ButtonsContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInGoogleUser = async (event) => {
    event.preventDefault();
    try {
      await signInWithGooglePopup();
      resetFormFields();
    } catch (error) {
      console.log("Error: cannot sign in.", error.code);
      alert("Error: cannot sign in. \n" + error.code);
    }
  };

  const handleSubmit = async (event) => {
    const { email, password } = formFields;
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("email or password may be incorrect.");
          break;
        case "auth/user-not-found":
          alert("no user is associated with this email.");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <SigninContainer>
      <Header>Already have an account</Header>
      <span>Sign In with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          required
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <FormInput
          required
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <ButtonsContainer>
          <Button type="submit" onClick={handleSubmit}>
            Sign In
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInGoogleUser}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SigninContainer>
  );
};

export default SignInForm;
