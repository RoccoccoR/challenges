export function Pentagon() {
  const circle = document.createElement("div");
  circle.classList.add("pentagon");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = GetRandomColor();
  });
  return pentagon;
}
