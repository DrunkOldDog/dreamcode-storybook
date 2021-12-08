import React from 'react';
import MoreIcon from '../../assets/icons/More';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'select' }
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args}>{args.label}</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
  label: 'Suscríbete',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'cargar más',
  type: 'secondary',
  iconRight: <MoreIcon />
};
