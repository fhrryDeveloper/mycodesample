import React from 'react';
import { JuniAuthHeader } from '../../components/JuniAuthHeader/juniauthheader';
import { JuniAuthTitle } from '../../components/JuniAuthTitle/juniauthtitle';
import { JuniTextInput } from '../../components/JuniTextInput/junitextinput';
import { JuniCheck } from '../../components/JuniCheck/junicheck';
import { JuniButton } from '../../components/JuniButton/junibutton';
import './signinrightpanel.css';

const renderGoogleIcon = () => <img alt="Google Icon" src='./img/google-icon.png'/>;

/**
 * Right Panel of Auth UI component
 */
export const SigninRightPanel = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  console.log("signin")

  return (
    <div className="rightpanel-background d-md-block">
      <JuniAuthHeader desc="Don’t have an account?" authStatus="Signup" redirecturl="register" />  
      <div className="auth-title mt-98">
        <JuniAuthTitle content="Sign in to your Juni" classNames="px-20 width-100p" specialcontent="financial identity" desc="Signin to access your Juni financial identity" />
      </div>
      <div className="auth-form">
        <hr className="mx-20"></hr>
        <JuniTextInput label="Email address" required size="lg" placeholder="Enter email address" value={email} onChange={fn => setEmail(fn)} classNames="mt-25 px-20 width-100p" />
        <JuniTextInput label="Password" required size="lg" type="password" placeholder="Enter password" value={password} onChange={fn => setPassword(fn)} classNames="mt-25 px-20 width-100p"/>
        <JuniCheck classNames="mt-25 px-20 width-100p" />
        <JuniButton title="Signin Account" color="primary" buttonType="contained" radius="0px" classNames="mt-30 px-20 width-100p" />
        <div className="d-flex py-30 px-20">
          <hr className="flex-shrink-1 flex-grow-1"></hr>
          <span className="mx-30">Or</span>
          <hr className="flex-shrink-1 flex-grow-1"></hr>
        </div>
        <JuniButton title="Signin with Google" color="light" buttonType="contained" renderPreIcon={renderGoogleIcon} radius="6px" classNames="mt-6 px-20 width-100p" />
      </div>
    </div>
  );
};