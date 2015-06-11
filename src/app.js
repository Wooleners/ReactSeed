  "use strict";

require("../style.css")

var tabSelector = require("./tabSelector"),
    react = require("react"),

    data = [
      {
        name: "Red",
        value: "red"
      },
      {
        name: "Blue",
        value: "blue"
      },
      {
        name: "Green",
        value: "green"
      }
    ];

react.render(
  tabSelector({
    label: "Color",
    data: data,
    selected: null
  })
);
