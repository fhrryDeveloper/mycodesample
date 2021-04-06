import React from 'react';
import { JuniTextInput } from '../../components/JuniTextInput/junitextinput';

export default {
  title: 'Components/JuniTextInput',
  component: JuniTextInput,
  argTypes: {
    buttonText: "default",
  },
};
const Template = (args) => <JuniTextInput {...args} />;

export const FullNameInput = Template.bind({});
FullNameInput.args = {
  labelText: "Full name*",
  inputType: "text",
  placeholderText: "",
  valueText: "Brendan Playford",
  showPassword: "false"
};

export const EmailAddressInput = Template.bind({});
EmailAddressInput.args = {
  labelText: "Email address*",
  inputType: "text",
  placeholderText: "Enter email address",
  valueText: "",
  showPassword: "false"
};

export const CreatePasswordInput = Template.bind({});
CreatePasswordInput.args = {
  labelText: "Create password*",
  inputType: "password",
  placeholderText: "Enter password",
  valueText: "",
  showPassword: "true"
};
