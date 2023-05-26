import React from 'react';
import { CardG } from './CardG';

export default {
  title: 'Components/Card/CardG',
  component: CardG,
  parameters: { status: { type: 'stable' } },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args: any) => <CardG {...args} />;

export const Primary: any = Template.bind({});
Primary.args = {
  title: 'Golpe da acomodação',
  iconWidth: '35px',
  iconHeight: '35px',
  height: '140px',
  width: '170px',
  backgroundColor: 'rgb(30, 167, 253)',
  borderRadius: 'none',
  border: 'none',
  boxShadow: '2px 2px 1px 0 rgb(26 57 144 / 25%)',
  color: 'white',
  withIcon: true
};
