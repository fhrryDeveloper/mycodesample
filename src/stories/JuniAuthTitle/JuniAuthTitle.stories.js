import React from 'react';
import { JuniAuthTitle } from '../../components/JuniAuthTitle/juniauthtitle';

export default {
  title: 'Components/JuniAuthTitle',
  component: JuniAuthTitle,
  argTypes: {
    buttonText: "default",
  },
};
const Template = (args) => <JuniAuthTitle {...args} />;

export const JuniAuthTitleComponent = Template.bind({});
JuniAuthTitleComponent.args = {
  content: "Create your Juni",
  specialcontent: "financial identity",
  desc: "Register an account to make your data portable"
};
