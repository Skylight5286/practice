const vid = document.getElementById("video1");
const vidSizes = ["small", "normal", "big"];

function playPause() {
	if (vid.paused) {
		vid.play();
	} else vid.pause();
}

function replaceSize(size) {
	list = vid.classList;
	for (let cl of vidSizes) {
		if (list.contains(cl)) list.replace(cl, size);
	}
}
function small() {
	replaceSize("small");
}

function normal() {
	replaceSize("normal");
}

function big() {
	replaceSize("big");
}