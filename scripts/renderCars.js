const elCards = document.querySelector(".rent-cards__all-items");
const elBtn1 = document.querySelector(".rent-cards__buttons");

function renderTab(items) {
  let arrCards = [];

  items.forEach((render) => {
    render.category.forEach((categoryElem) => {
      if (!arrCards.includes(categoryElem)) {
        arrCards.push(categoryElem);
      }
    });
  });
  arrCards.forEach((render) => {
    const buttonA = document.createElement("a");
    buttonA.classList.add("rent-cards__CompactButton");
    buttonA.style.cursor = "pointer";
    elBtn1.appendChild(buttonA);
    buttonA.textContent = render;
  });

  elBtn1.addEventListener("click", (evt) => {
    const fileredArray = arr.filter((item) =>
      item.category.includes(evt.target.textContent)
    );
    if (fileredArray.length > 0) {
      render(fileredArray);
    }
  });
}

renderTab(arr);

function render(items) {
  elCards.innerHTML = "";
  items.slice(0, 6).forEach((element) => {
    const newDiv = document.createElement("div");

    newDiv.innerHTML = `
    <div class="rent-cards__fordFiesta">
    <div class="fordFiesta-texts">
      <h5 class="fordFiesta-texts__name">${element.title}</h5>
      <h5 class="fordFiesta-texts__name-two">${element.aboutCar}</h5>
    </div>
    <img
      src="${element.img}"
      class="fordFiesta-img"
      alt=""
    />
    <div class="all">
      <div class="rent-cards__fordFiesta-items">
        <div class="fordFiesta-items__icon">
          <div class="fordFiesta-img">
            <img
              src="./assets/images/car-items-imgs/user-seats.svg"
              alt=""
              class="imgCar-1"
            />
            <p class="fordFiesta-paragraph">5 Seats</p>
          </div>
          <div class="fordFiesta-img">
            <img
              src="./assets/images/car-items-imgs/car-automatic.svg"
              alt=""
            />
            <p class="fordFiesta-paragraph">Automatic</p>
          </div>
        </div>
      </div>
      <div class="rent-cards__fordFiesta-items">
        <div class="fordFiesta-items__icon">
          <div class="fordFiesta-img">
            <img
              src="./assets/images/car-items-imgs/garantiya-years.svg"
              alt=""
              class="imgCar-1"
            />
            <p class="fordFiesta-paragraph">21+ Years</p>
          </div>
          <div class="fordFiesta-img">
            <img
              src="./assets/images/car-items-imgs/petrol-lit.svg"
              alt=""
            />
            <p class="fordFiesta-paragraph">1-lit / 2.5 km</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;

    elCards.appendChild(newDiv);
  });
}

render(arr);
