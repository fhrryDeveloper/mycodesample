import React from 'react';
import { Form } from 'react-bootstrap';
import './junitextinput.css';
import PropTypes from 'prop-types';

/**
 * Input of Auth UI component
 */
export const JuniTextInput = ({ required, label, size, type, placeholder, value, classNames, onChange }) => {
  const [inputType, setInputType] = React.useState({ inputType: type });
  const [passwordVisibility, setPasswordVisibility] = React.useState(type === 'password');

  const toggleLockPassword = () => {
    if (passwordVisibility) {
      setInputType('password');
    } else {
      setInputType('text');
    }
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <div className={classNames}>
      <Form>
        <Form.Group>
          <Form.Label>{label + (required ? " *" : "")}</Form.Label>
          <div className="d-flex pos-relative">
            <Form.Control size={size} type={inputType} className="juni-medium-input" placeholder={placeholder} value={value} onChange={event => onChange && onChange(event.target.value)}/>
            <p onClick={toggleLockPassword} className={[type === 'password' ? "d-block" : "d-none", "pos-absolute", "input-inner-field-right"].join(" ")}>{ passwordVisibility ? 'Hide' : 'Show' }</p>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

JuniTextInput.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  classNames: PropTypes.string,
  onChange: PropTypes.func,
};
