// const helpers = require("./helpers");

// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === "create-rectangles") {
    const nodes: SceneNode[] = [];
    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();

      rect.x = i * 120;

      // const rotation = helpers.degToRad(i * msg.rotation);
      // rect.relativeTransform = [
      //   [Math.cos(rotation), Math.sin(rotation), 0],
      //   [-Math.sin(rotation), Math.cos(rotation), 0],
      // ];

      const greenChannel = i * (1 / msg.count);

      rect.fills = [{ type: "SOLID", color: { r: 1, g: greenChannel, b: 0 } }];
      rect.opacity = 0.5;
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
