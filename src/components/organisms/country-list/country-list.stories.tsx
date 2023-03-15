import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CountryList } from "./country-list";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/CountryList",
  component: CountryList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CountryList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CountryList> = (args) => (
  <CountryList {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  header: "Country list",
  countries: [
    {
      name: {
        common: "Mexico",
        official: "United Mexican States",
      },
      cca3: "MEX",
      capital: ["Mexico City"],
      region: "Americas",
      borders: ["BLZ", "GTM", "USA"],
      maps: {
        googleMaps: "https://goo.gl/maps/s5g7imNPMDEePxzbA",
      },
      population: 128932753,
      flags: {
        png: "https://flagcdn.com/w320/mx.png",
        svg: "https://flagcdn.com/mx.svg",
      },
    },
    {
      name: {
        common: "Mexico",
        official: "United Mexican States",
      },
      cca3: "MEX",
      capital: ["Mexico City"],
      region: "Americas",
      borders: ["BLZ", "GTM", "USA"],
      maps: {
        googleMaps: "https://goo.gl/maps/s5g7imNPMDEePxzbA",
      },
      population: 128932753,
      flags: {
        png: "https://flagcdn.com/w320/mx.png",
        svg: "https://flagcdn.com/mx.svg",
      },
    },
  ],
};
