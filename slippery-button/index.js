const hitbox = document.querySelector(".hitbox");
const h2 = document.querySelector("h2");
let hitboxPosition = { x: 50, y: 50 };
let counter = 0;;

function getRandomInt(min, max) {
  max = Math.floor(Math.random() * max) + min;
  return max;
}

hitbox.addEventListener("mouseover", () => {
  counter++
  if (counter == 3) {
    h2.style.visibility = "visible";
  }
  hitboxPosition["x"] = getRandomInt(0, 100);
  hitboxPosition["y"] = getRandomInt(0, 100);
  hitbox.style.top = hitboxPosition["y"] + "%";
  hitbox.style.left = hitboxPosition["x"] + "%";
});
