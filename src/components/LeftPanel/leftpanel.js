import React from 'react';
import './leftpanel.css';

/**
 * Left Panel of Auth UI component
 */
export const LeftPanel = () => {
  return (
    <div className="leftpanel-background">
      <div>
        <img className="logo-class" src="./img/junilogo.png" alt="Juni Logo" />
      </div>
      <div className="content-class">
        <p className="content-text">The Juni network is a <b><u>decentralized financial identity</u></b> that allows you to connect your centralized finance CeFi accounts to the DeFi apps you <b>love</b></p>
      </div>
    </div>
  );
};