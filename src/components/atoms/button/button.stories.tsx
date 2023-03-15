import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Bordered = Template.bind({});
Bordered.args = {
  text: "bordered button",
  type: "bordered",
  onclick: () => console.log("onclick"),
};

export const Text = Template.bind({});
Text.args = {
  text: "text button",
  type: "text",
  onclick: () => console.log("onclick"),
};
