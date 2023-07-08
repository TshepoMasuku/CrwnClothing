import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignupContainer, Header } from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    const { displayName, email, password, confirmPassword } = formFields;
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Error: email already in use.");
      } else {
        console.log("Error: cannot create new user.", error.code);
        alert("Error: cannot create new user. \n" + error.code);
      }
    }
  };

  return (
    <SignupContainer>
      <Header>I do not have an account</Header>
      <span>Sign Up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          required
          label="Display Name"
          type="displayName"
          name="displayName"
          value={displayName}
          onChange={(e) => {
            handleChange(e);
          }}
        />
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
        <FormInput
          required
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignupContainer>
  );
};

export default SignUpForm;
