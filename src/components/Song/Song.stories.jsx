import React from "react";

import Song from "./Song";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Song",
  component: Song,
  argTypes: {
    mode: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={args.mode === "dark" ? { backgroundColor: "#22222D", height: '100vh' } : {}}>
    <Song {...args} />
  </div>
);

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
  author: "Do it your way",
  songTitle: "C'mon Everybody",
  imageUrl:
    "https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1631/posts/34195/image/Album%20Cover%20Template%20for%20New%20Wave%20Music%20CD%20copy.jpg",
};
Light.parameters = {
  zeplinLink:
    "zpl://components?pid=61b001674bc2968380b46e95&coid=61b0108575eb2581c7f5e2aa",
};

export const Dark = Template.bind({});
Dark.args = {
  author: "Do it your way",
  songTitle: "C'mon Everybody",
  imageUrl:
    "https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1631/posts/34195/image/Album%20Cover%20Template%20for%20New%20Wave%20Music%20CD%20copy.jpg",
  mode: "dark",
};
Dark.parameters = {
  zeplinLink:
    "zpl://components?pid=61b001674bc2968380b46e95&coid=61b0108575eb2581c7f5e2aa",
};
