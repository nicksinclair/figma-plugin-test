import "./ui.css";
const create = document.getElementById("create");
const cancel = document.getElementById("cancel");
// if (!!create) {
//   create.onclick = () => {
//     const textbox = document.getElementById("count") as HTMLInputElement;
//     const count = parseInt(textbox.value, 10);
//     parent.postMessage(
//       { pluginMessage: { type: "create-rectangles", count } },
//       "*"
//     );
//   };
// }
// if (!!cancel) {
//   cancel.onclick = () => {
//     parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
//   };
// }
create.onclick = () => {
    const textbox = document.getElementById("count");
    const count = parseInt(textbox.value, 10);
    parent.postMessage({ pluginMessage: { type: "create-rectangles", count } }, "*");
};
cancel.onclick = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
};
