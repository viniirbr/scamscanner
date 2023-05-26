import React from 'react';
import { TabsComponentComponent } from './TabsComponent';

export default {
  title: 'Components/Tabs/Tabs',
  component: TabsComponent,
  parameters: { status: { type: 'stable' } },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <TabsComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'TabsComponent',
};
