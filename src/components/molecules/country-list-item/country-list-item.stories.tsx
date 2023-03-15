import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CountryListItem } from "./country-list-item";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/CountryListItem",
  component: CountryListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CountryListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CountryListItem> = (args) => (
  <CountryListItem {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  nameOfficial: "Hungary",
  nameCommon: "Hungary",
  region: "Europe",
  flag: "https://flagcdn.com/w320/hu.png",
};
