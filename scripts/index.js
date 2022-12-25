const elModal = document.querySelector(".modal"),
	loginbtn = document.querySelector(".login__button"),
	closeModal = document.querySelector("#close-modal"),
	elHeaderImg = document.querySelector(".header__img"),
	elMobilebtn = document.querySelector(".mobile__button"),
	mobileClose = document.querySelector(".mobile__close"),
    elMenu = document.querySelector(".mobile");
    


loginbtn.addEventListener("click", () => {
	elModal.style.transform = " translateY(0px)";
	document.body.style.overflow = "hidden";
});

closeModal.addEventListener("click", () => {
	elModal.style.transform = " translateY(-4000px)";
	document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
	if (e.target.matches(".modal")) {
		elModal.style.transform = " translateY(-4000px)";

		document.body.style.overflow = "auto";
	}
});

elHeaderImg.addEventListener("click", (e) => {
	elMenu.style.transform = "translateX(0)";
});

mobileClose.addEventListener("click", (e) => {
	elMenu.style.transform = "translateX(9000px)";
});

window.addEventListener("click", (e) => {
	if (e.target.matches(".mobile")) {
		elMenu.style.transform = "translateX(9000px)";
	}
});

elMobilebtn.addEventListener("click", (e) => {
    elMenu.style.transform = "translateX(9000px)";

	elModal.style.transform = " translateY(0px)";
	document.body.style.overflow = "hidden";
});
