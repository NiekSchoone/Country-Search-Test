import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NotFound } from "./not-found";

export default {
  title: "Pages/NotFound",
  component: NotFound,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args) => (
  <NotFound {...args} />
);

export const Page = Template.bind({});
