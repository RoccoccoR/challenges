export function Square() {
  const circle = document.createElement("div");
  circle.classList.add("square");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = GetRandomColor();
  });
  return square;
}
