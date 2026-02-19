import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
    ${Header()}
    ${Main()}
  `;
});
