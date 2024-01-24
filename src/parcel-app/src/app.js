import { cample, component } from "cample";

const newComponent = component(
  "new-component",
  `<div class="component">
    <div class="clicks" data-value="{{dynamicData}}">Clicks:{{dynamicData}}</div>
    <button class="button">Click</button>
  </div>`,
  {
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
  }
);
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
