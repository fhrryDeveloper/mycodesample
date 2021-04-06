import React from 'react';
import { JuniButton } from '../../components/JuniButton/junibutton';

export default {
  title: 'Components/JuniButton',
  component: JuniButton,
  argTypes: {
    buttonText: "default",
  },
};
const Template = (args) => <JuniButton {...args} />;

export const CommonRegisterButton = Template.bind({});
CommonRegisterButton.args = {
  buttonText: "Register Account",
  background: '#300038',
  color: 'white',
  borderRadius: '0px',
  googleButton: 'false'
};

export const GoogleRegisterButton = Template.bind({});
GoogleRegisterButton.args = {
  buttonText: "Register with Google",
  background: 'white',
  color: 'black',
  borderRadius: '0px',
  googleButton: 'true'
};
