import React from "react"; 
import apiService from '../../../Api-service/ApiService';
import { useState } from 'react';

const ForgotPassword = ({accounts}) => {

    const passwordResetFormEl = document.getElementById("password-reset-form");
    const alertEl = document.getElementById("alert");
    const passwordEl = document.getElementById("password");
    const passwordVerifyEl = document.getElementById("password-verify");
    
    function formResetPassword(e) {
      // Prevent the form's default behavior
      e.preventDefault();
      // Reset the alert to empty
      setAlert();
      // Verify that the passwords match
      const password = passwordEl.value;
      const passwordVerify = passwordVerifyEl.value;
      if (password !== passwordVerify) {
        return setAlert("Password verification must match.");
      }
      // Call password.resetPassword()
      password.resetPassword({
        password: password,
      }).catch(function(error) {
        setAlert(error.message);
      });
    }
    
    // Set the alert element to show the message
    function setAlert(message) {
      alertEl.innerText = message;
      alertEl.style.display = message ? "block" : "none";
    }

    const password = passwordEl.value;
    const passwordVerify = passwordVerifyEl.value;
    if (password !== passwordVerify) {
        return setAlert("Password verification must match.");
    }

    // Catch the error
    password.resetPassword()
    .catch(function(error) {
        setAlert(error.message);
    });

    // Add the error message to the alert element
    function setAlert(message) {
        alertEl.innerText = message;
        alertEl.style.display = message ? "block" : "none";
    }

    passwordResetFormEl.addEventListener("submit", formResetPassword);
  
    return (
        <resetPassword>
            <Container>
                <FormContainer>          
                  <MainHeading>Reset Password</MainHeading>
                    <FormBox onSubmit={handleSubmit}>
                        <form id="password-reset-form">
                            <div id="alert"></div>
                            <label for="password">New Password</label>
                            <input type="password" id="password" />
                            <label for="password-verify">Re-type password</label>
                            <input type="password" id="password-verify" />
                        </form>
                    <ButtonWrapper>
                    <Button type='submit'>Confirm</Button>
                    </ButtonWrapper>
                    </FormBox>
                </FormContainer>
            </Container>
        </resetPassword>
    )
}
  
export default Login
