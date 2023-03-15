import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Flag } from "./flag";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Flag",
  component: Flag,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Flag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Flag> = (args) => <Flag {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: "large",
  imageURL: "https://flagcdn.com/w320/vn.png",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  imageURL: "https://flagcdn.com/w320/vn.png",
};
