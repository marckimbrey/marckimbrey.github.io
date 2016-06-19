
// mobile navigation
var mobileNav = document.getElementsByClassName("menu-icon")[0];
var mobileNavLines = document.getElementsByClassName("menu-icon-line");

mobileNav.addEventListener("click", function(el) {
	mobileNav.classList.toggle("menu-icon-active");
	for (var i=0; i<mobileNavLines.length; i++) {
			mobileNavLines[i].classList.toggle("menu-icon-line-active");
	}
	if (mobileNav.classList.contains("menu-icon-active")) {
		mobileNavLines[0].style.transform = "rotate(42deg)";
		mobileNavLines[1].style.visibility = "hidden";
		mobileNavLines[2].style.transform = "rotate(-42deg)";

	} else {
		mobileNavLines[0].style.transform = "rotate(0deg)";
			mobileNavLines[1].style.visibility = "visible";
		mobileNavLines[2].style.transform = "rotate(0deg)";
	}

	console.log();
});
