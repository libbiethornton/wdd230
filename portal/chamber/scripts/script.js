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

localStorage.setItem('lastVisit', '2023-02-22');

displayDaysSinceLastVisit();

function displayDaysSinceLastVisit() {
  const visitsDisplay = document.getElementById('lastVisit');

  const lastVisit = localStorage.getItem('lastVisit');

  if (!lastVisit) {
    visitsDisplay.innerText = 'This is your first visit';
    
    return;
  }

  const lastVisitDate = Date.parse(lastVisit);
  
  if (!lastVisitDate) {
    // Stored date is not a valid format
    return;
  }

  const currentDate = new Date();

  const difference = currentDate - lastVisitDate;
  const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

  visitsDisplay.innerText = differenceInDays;
}


