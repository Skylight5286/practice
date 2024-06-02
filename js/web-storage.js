const form = document.getElementById("form1");
const message = document.getElementById("message");
const displayValues = document.getElementById("display_values");

function isWebStorageAvailable() {
	if (Storage === undefined) return false;
	return true;
}

form1.addEventListener("submit", function(e) {
	let fname = form1.elements.fname.value;
	let lname = form1.elements.lname.value;

	if (isWebStorageAvailable()) {
		localStorage.setItem("fname", fname);
		localStorage.setItem("lname", lname);
		sessionStorage.setItem("fname", fname);
		sessionStorage.setItem("lname", lname);
	} else {
		form1.style.display = "none";
		message.style.display = "block";
		message.innerHTML = "Web storage not available."
	}
});
window.addEventListener("load", function () {
	displayValues.innerHTML = "From Web Storage: My name is "+localStorage.fname+" "+localStorage.lname+"<br>From Session Storage: My name is "+sessionStorage.fname+" "+sessionStorage.lname;
	console.log("fully loaded");
});