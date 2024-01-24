import { cample, component } from "cample";
import "./style.css";
import componentTemplate from "./component.html";

const newComponent = component("new-component", componentTemplate, {
  script: ({ element, functions }) => {
    const button = element.querySelector(".button");
    const updateFunction = () => {
      functions?.updateClicks((data) => {
        return data + 1;
      });
    };
    button.addEventListener("click", updateFunction);
  },
  data: () => {
    return {
      dynamicData: 0,
    };
  },
  dataFunctions: {
    updateClicks: "dynamicData",
  },
});
cample("#app", {
  trimHTML: true,
}).render(
  `
<template data-cample="new-component"></template>
`,
  {
    newComponent,
  }
);
