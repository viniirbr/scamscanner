import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Card } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Mobile: Story = {
  args: {
    scam: {
      name: "Scam Name",
      description: "Scam Description",
      imageSrc: "https://via.placeholder.com/150",
    },
  },
};
