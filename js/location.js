const loc = document.getElementById("location");
function locate() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showposition,showError);
	} else {
		loc.innerHTML = "Browser does not support geolocation."
	}
}
function showposition(position) {
	loc.innerHTML = "latitude: " + position.coords.latitude + "longitude: "+position.coords.longitude;
}
function showError(error) {
	switch (error.code) {
		case error.PERMISSION_DENIED:
			loc.innerHTML = "User denied permission to location."
			break;
		case error.POSITION_UNAVAILABLE:
			loc.innerHTML = "Position unavailable.";
			break;
		case error.TIMEOUT:
			loc.innerHTML = "Timeout getting current position.";
			break;
		default:
			loc.innerHTML = "unknown error occured."
		}
	}