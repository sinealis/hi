const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu () {
	if (!showMenu) {
		menuBtn.classList.add("close");
		menu.classList.add("show");
		menuNav.classList.add("show");
		menuBranding.classList.add("show");
		navItems.forEach(item => item.classList.add("show"));

		showMenu = true;

	} else {
		menuBtn.classList.remove("close");
		menu.classList.remove("show");
		menuNav.classList.remove("show");
		menuBranding.classList.remove("show");
		navItems.forEach(item => item.classList.remove("show"));

		showMenu = false;
	}
}

function logoAnimate () {
	var tl = new TimelineMax();

	tl.fromTo("#name", 1, { y: -500, opacity: 0 }, { y: 0, opacity: 1, ease: "power4.out" }, .5).fromTo("#dev", 1, { y: -100, opacity: 0 }, { y: 0, opacity: 1, ease: "power4.out" }, 1)
		.staggerFrom(".fab", 0.9, {
			opacity: 0,
			y: -40,
			ease: "power4.out"
		}, 0.3);
}
window.onload = function () {
	logoAnimate();
}
