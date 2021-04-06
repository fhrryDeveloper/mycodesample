import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './junibutton.css';

/**
 * Input of Auth UI component
 */
export const JuniButton = ({ title, buttonType, color, radius, renderPreIcon, renderPostIcon,  classNames }) => {
  var variantVariable = "";
  
  if (buttonType === "contained") {
    variantVariable = color;
  } else if (buttonType === "outlined") {
    variantVariable = "outline-" + color;
  }

  return (
    <div className={classNames }>
      <Button style={{ borderRadius: radius }} variant={variantVariable} className="register-btn width-100p">
        { renderPreIcon ? renderPreIcon() : null }
        <span className="mx-10">{ title }</span>
        { renderPostIcon ? renderPostIcon() : null }
      </Button>
    </div>
  );
};

JuniButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  color: PropTypes.string,
  radius: PropTypes.string,
  renderPreIcon: PropTypes.func || null,
  renderPostIcon: PropTypes.func || null,
  classNames: PropTypes.string,
};
