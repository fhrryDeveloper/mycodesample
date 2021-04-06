import React from 'react';
import { Form } from 'react-bootstrap';
import './junicheck.css';

/**
 * Input of Auth UI component
 */
export const JuniCheck = ({classNames}) => {
  return (
    <div className={ classNames }>
      <div className="terms-grid">
        <Form>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to terms & conditions" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};