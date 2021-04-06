import React from 'react';
import { JuniAuthHeader } from '../../components/JuniAuthHeader/juniauthheader';
import { JuniAuthTitle } from '../../components/JuniAuthTitle/juniauthtitle';
import { JuniTextInput } from '../../components/JuniTextInput/junitextinput';
import { JuniCheck } from '../../components/JuniCheck/junicheck';
import { JuniButton } from '../../components/JuniButton/junibutton';
import './registerrightpanel.css';

const renderGoogleIcon = () => <img alt="Google Icon" src='./img/google-icon.png'/>;

/**
 * Right Panel of Auth UI component
 */
export const RegisterRightPanel = () => {
  const [fullName, setFullName] = React.useState("Brendan Playford");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  

  return (
    <div className="rightpanel-background d-md-block">
      <JuniAuthHeader desc="Already have an account?" authStatus="Sign In" redirecturl="signin" />  
      <div className="auth-title mt-98">
        <JuniAuthTitle content="Create your Juni" classNames="px-20 width-100p" specialcontent="financial identity" desc="Register an account to make your data portable" />
      </div>
      <div className="auth-form">
        <hr className="mx-20"></hr>
        <JuniTextInput label="Full name" required size="lg" placeholder="Enter full name" value={fullName} onChange={fn => setFullName(fn)} classNames="mt-25 px-20 width-100p" />
        <JuniTextInput label="Email address" required size="lg" placeholder="Enter email address" value={email} onChange={fn => setEmail(fn)}  classNames="mt-25 px-20 width-100p" />
        <JuniTextInput label="Create password" required size="lg" type="password" placeholder="Enter password" value={password} onChange={fn => setPassword(fn)} classNames="mt-25 px-20 width-100p"/>
        <JuniButton title="Register Account" color="primary" buttonType="contained" radius="0px" classNames="mt-30 px-20 width-100p" />
        <div className="d-flex py-30 px-20">
          <hr className="flex-shrink-1 flex-grow-1"></hr>
          <span className="mx-30">Or</span>
          <hr className="flex-shrink-1 flex-grow-1"></hr>
        </div>
        <JuniButton title="Register with Google" color="light" buttonType="contained" renderPreIcon={renderGoogleIcon} radius="6px" classNames="mt-6 px-20 width-100p" />
      </div>
    </div>
  );
};