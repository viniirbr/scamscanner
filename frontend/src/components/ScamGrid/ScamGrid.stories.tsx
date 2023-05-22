import { Meta, StoryObj } from "@storybook/react";
import { Grid } from "../UI/Grid";
import { Card } from "../UI/Card";
import { ScamGrid } from ".";

const meta: Meta<typeof ScamGrid> = {
  title: "Components/ScamGrid",
  component: ScamGrid,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ScamGrid>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const ScamsList: Story = {
  render: () => (
    <ScamGrid
      scams={Array(10).fill({
        name: "Visa and Immigration Scams",
        description:
          "Scammers may pose as immigration officials or lawyers and offer assistance with visa applications or residency permits. They may promise faster processing or guaranteed approval for a fee. Always verify the legitimacy of individuals or agencies before providing personal information or making any payments.",
        imageSrc: "https://via.placeholder.com/150",
      })}
    />
  ),
};

export const Empty: Story = {
  args: {
    scams: [],
    className: "h-96",
  },
};
