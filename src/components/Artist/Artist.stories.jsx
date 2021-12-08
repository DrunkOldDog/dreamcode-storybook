import React from "react";

import Artist from "./Artist";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Artist",
  component: Artist,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Artist {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: "Björk",
  genre: "Experimental",
  imageUrl:
    "https://www.yaconic.com/wp-content/uploads/2019/11/bjork-debut-1024x753.jpg",
};
Default.parameters = {
  zeplinLink:
    "zpl://components?pid=61b001674bc2968380b46e95&coid=61b01086e0b07e7576989e45",
};
