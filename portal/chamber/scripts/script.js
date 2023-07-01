let x = document.lastModified;
document.getElementById("updated").innerHTML = "Last Modification: " + x;

let currentYear = new Date().getFullYear();
document.querySelector("span").innerHTML = currentYear;

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
document.querySelector("p").innerHTML = fulldate;

function onClick() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

/* get date last visited */




function displayDaysSinceLastVisit() {
  const visitsDisplay = document.getElementById('lastVisit');
  

  let lastVisit = Number(window.localStorage.getItem("visits-ls"));

  if (lastVisit !== 0) {
    visitsDisplay.textContent = numVisits;
  } else {
    visitsDisplay.textContent = 'This is your first visit!';
  }

  numVisits++;

  localStorage.setItem("visits-ls", numVisits);

}

displayDaysSinceLastVisit();

function displayBanner() {
  let weekday = new Date().getDay();
  if (weekday == 1 || weekday == 2) {
    document.querySelector(".banner").style.display = "block";
  }
}

function addDateTime() {
  let day = new Date().getDay();
  document.querySelector('#datetime').input.value = day;
}

