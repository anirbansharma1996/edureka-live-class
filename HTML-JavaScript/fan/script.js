const fan = document.getElementById("fan");
const one = document.getElementById("speed-1");
const two = document.getElementById("speed-2");
const three = document.getElementById("speed-3");
const off = document.getElementById("off");

off.addEventListener("click", () => {
  fan.style.animation = "spin 0s linear infinite";
});

one.addEventListener("click", () => {
  fan.style.animation = "spin 6s linear infinite";
});
two.addEventListener("click", () => {
  fan.style.animation = "spin 2s linear infinite";
});
three.addEventListener("click", () => {
  fan.style.animation = "spin 0.5s linear infinite";
});
