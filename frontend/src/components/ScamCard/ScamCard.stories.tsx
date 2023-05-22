import type { Meta, StoryObj } from "@storybook/react";
import { ScamCard } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ScamCard> = {
  title: "Components/ScamCard",
  component: ScamCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ScamCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Mobile: Story = {
  args: {
    scam: {
      name: "Visa and Immigration Scams",
      description:
        "Scammers may pose as immigration officials or lawyers and offer assistance with visa applications or residency permits. They may promise faster processing or guaranteed approval for a fee. Always verify the legitimacy of individuals or agencies before providing personal information or making any payments.",
      imageSrc: "https://via.placeholder.com/150",
    },
  },
};
