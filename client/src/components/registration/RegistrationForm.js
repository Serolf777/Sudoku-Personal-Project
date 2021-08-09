import React, { useState } from "react";
import FormError from "../layout/FormError.js";
import ErrorList from "../ErrorList.js"
import translateServerErrors from "../../services/translateServerErrors"
import config from "../../config.js";

const RegistrationForm = () => {
  const [userPayload, setUserPayload] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errors, setErrors] = useState({});
  const [serverErrors, setServerErrors] = useState({});

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const validateInput = (payload) => {
    setErrors({});
    const { email, password, passwordConfirmation } = payload;
    const emailRegexp = config.validation.email.regexp.emailRegexp;
    let newErrors = {};
    if (!email.match(emailRegexp)) {
      newErrors = {
        ...newErrors,
        email: "is invalid",
      };
    }

    if (password.trim() == "") {
      newErrors = {
        ...newErrors,
        password: "is required",
      };
    }

    if (passwordConfirmation.trim() === "") {
      newErrors = {
        ...newErrors,
        passwordConfirmation: "is required",
      };
    } else {
      if (passwordConfirmation !== password) {
        newErrors = {
          ...newErrors,
          passwordConfirmation: "does not match password",
        };
      }
    }

    setErrors(newErrors);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    validateInput(userPayload);
    try {
    if (Object.keys(errors).length === 0) {
      const response = await fetch("/api/v1/users", {
        method: "post",
        body: JSON.stringify(userPayload),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
        if (!response.ok) {
          if (response.status === 422) {
            const body = await response.json();
            const newServerErrors = translateServerErrors(body.errors)
            return setServerErrors(newServerErrors)
          }
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        } 
        const userData = await response.json();
        setShouldRedirect(true);
      }
    } catch (error){
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const onInputChange = (event) => {
    setUserPayload({
      ...userPayload,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  if (shouldRedirect) {
    location.href = "/";
  }

  return (
    <div className="grid-container" onSubmit={onSubmit}>
      <h1>Register</h1>
      <ErrorList errors={serverErrors} />
      <form>
        <div>
          <label>
            Email
            <input type="text" name="email" value={userPayload.email} onChange={onInputChange} />
            <FormError error={errors.email} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={userPayload.password}
              onChange={onInputChange}
            />
            <FormError error={errors.password} />
          </label>
        </div>
        <div>
          <label>
            Password Confirmation
            <input
              type="password"
              name="passwordConfirmation"
              value={userPayload.passwordConfirmation}
              onChange={onInputChange}
            />
            <FormError error={errors.passwordConfirmation} />
          </label>
        </div>
        <div>
          <input type="submit" className="button" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
