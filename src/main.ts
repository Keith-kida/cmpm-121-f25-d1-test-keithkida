import exampleIconUrl from "./noun-paperclip-7598668-00449F.png";
import "./style.css";

document.body.innerHTML = `
  <p>Example image asset: <img src="${exampleIconUrl}" class="icon" /></p>
`;

const counterDiv = document.createElement("div");
counterDiv.textContent = "0 🐱";
counterDiv.className = "counter-display";
document.body.appendChild(counterDiv);

// -make add burger button
const clickButton = document.createElement("button");
clickButton.textContent = "🐱";
clickButton.className = "emoji-button";
document.body.appendChild(clickButton);

console.log("never gonna give you up");

document.addEventListener("DOMContentLoaded", () => {
  const butn: HTMLButtonElement = document.createElement("button");
  butn.type = "button";
  butn.innerHTML = "😟";
  document.body.append(butn);
});
