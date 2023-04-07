function getRandomInt(min, max) {
  max = Math.floor(Math.random() * max) + min;
  return max;
}

class Button {
  constructor(initial_pos_x, initial_pos_y, idNumber) {
    this.element = document.createElement("div");
    this.element.classList.add("hitbox");
    this.element.id = `hitbox${idNumber}`;
    this.element.innerHTML = '<button class="button"></button>';
    document.body.appendChild(this.element);

    this.hitboxPosition = { x: initial_pos_x, y: initial_pos_y };
  }
}

const h2_1 = document.getElementById("h2-1");
const h2_2 = document.getElementById("h2-2");
const buttonList = {};
let buttonNumber = 0;

buttonList[`hitbox${buttonNumber}`] = new Button(50, 50, buttonNumber);
buttonNumber++;

let elements = Array.prototype.slice.call(document.querySelectorAll(".hitbox"));
console.log(elements);

elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.top = `${getRandomInt(0, 100)}%`;
    element.style.left = `${getRandomInt(0, 100)}%`;
    buttonList[`hitbox${buttonNumber}`] = new Button(50, 50, buttonNumber);
    elements.push(buttonList[`hitbox${buttonNumber}`].element);
    buttonNumber++;
    console.log(elements);
  });
});
