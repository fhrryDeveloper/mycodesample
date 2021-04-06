import React from 'react';
import { JuniAuthHeader } from '../../components/JuniAuthHeader/juniauthheader';

export default {
  title: 'Components/JuniAuthHeader',
  component: JuniAuthHeader,
  argTypes: {
    desc: "",
    authStatus: ""
  },
};
const Template = (args) => <JuniAuthHeader {...args} />;

export const JuniAuthHeaderTemplate = Template.bind({});
JuniAuthHeaderTemplate.args = {
  desc: "Already have an account?",
  authStatus: "Sign In"
};
