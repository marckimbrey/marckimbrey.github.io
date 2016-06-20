
/***
mobile navigation
***/
var mobileNav = document.getElementsByClassName("menu-icon")[0];
var mobileNavLines = document.getElementsByClassName("menu-icon-line");
var pageLink = document.getElementsByClassName("page-link");
var siteHeader = document.getElementsByClassName("site-header")[0];

mobileNav.addEventListener("click", function(el) {
	mobileNav.classList.toggle("menu-icon-active");

	function navVisibility() {
		for(var i=0; i< pageLink.length; i++) {
			pageLink[i].classList.toggle("page-link-active");
		}
	}



	// nav icon animation
	if (mobileNav.classList.contains("menu-icon-active")) {
		mobileNavLines[0].style.transform = "rotate(42deg)";
		mobileNavLines[1].style.visibility = "hidden";
		mobileNavLines[2].style.transform = "rotate(-42deg)";
		siteHeader.style.padding = "0 0 200px 0";
		setTimeout(navVisibility, 500);

	} else {
		mobileNavLines[0].style.transform = "rotate(0deg)";
		mobileNavLines[1].style.visibility = "visible";
		mobileNavLines[2].style.transform = "rotate(0deg)";
		siteHeader.style.padding = "0";
		setTimeout(navVisibility, 100);
	}
	// nav links

});
