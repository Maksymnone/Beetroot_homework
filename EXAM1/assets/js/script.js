const lazyLoadInstance = new LazyLoad({});

document.querySelector(".hamburger").onclick = function () {
	this.classList.toggle("is-active");
	document.body.classList.toggle("show");
};

document.querySelector(".overlay").onclick = function () {
	document.querySelector(".hamburger").classList.remove("is-active");
	document.body.classList.remove("show");
};