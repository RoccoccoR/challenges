export function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = GetRandomColor();
  });
  return circle;
}
