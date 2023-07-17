console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let index = 1; index < 6; index++) {
    const star = document.createElement("img");
    star.setAttribute("src", "./assets/star-empty.svg");
    starContainer.append(star);
  }
  //--^-- your code here --^--
}

renderStars();
