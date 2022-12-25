function res(item) {
  const allServic = document.querySelector(".all-services");

  item.forEach((element) => {
    const newDivThree = document.createElement("div");

    newDivThree.innerHTML = `
      <div class="book-page">
              <div class="book-about">
                <h4>${element.title}</h4>
                <img
                  src="${element.img}"
                  alt=""
                />
              </div>
              <div class="hover">
                <p>
                ${element.about}
                </p>
              </div>
            </div>
      `;

    allServic.appendChild(newDivThree);
  });
}

res(arrTwo);
