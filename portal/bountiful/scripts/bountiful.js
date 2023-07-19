// Hamburger button funciton//
function onClick() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

// Date last modified //
let x = document.lastModified;
document.getElementById("updated").innerHTML = "Last updated: " + x;

// Number of forms submitted
function numberForms(){
	let button = document.getElementById('submitButton');
let clickCount = 0;
let display = document.getElementById('drinks');
if (localStorage.getItem("clickCount")) {
	clickCount = parseInt(localStorage.getItem("clickCount"));
}
button.addEventListener("click", function() {
	clickCount++;
	display.innerHTML = clickCount;
	localStorage.setItem("clickCount", clickCount);
});
}






