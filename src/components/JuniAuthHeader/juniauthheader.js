import React from 'react';
import './juniauthheader.css';
import PropTypes from 'prop-types';

/**
 * Header of Auth UI component
 */
export const JuniAuthHeader = ({ desc, authStatus, redirecturl }) => {
  console.log("please check", desc, authStatus, redirecturl)
  return (
    <div className="auth-header mt-70 mr-100">
      { desc } &nbsp; <a href={redirecturl}><b>{ authStatus }</b></a>
    </div>
  );
};

JuniAuthHeader.propTypes = {
  desc: PropTypes.string,
  authStatus: PropTypes.string,
  redirecturl: PropTypes.string,
};