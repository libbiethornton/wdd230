let x = document.lastModified;
document.getElementById("updated").innerHTML = "Last Modification: " + x;

let currentYear = new Date().getFullYear();
document.querySelector("span").innerHTML = currentYear;

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
document.querySelector("p").innerHTML = fulldate;

function myFunction() {
	var x = documet.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}