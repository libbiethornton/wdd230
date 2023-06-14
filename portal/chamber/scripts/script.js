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

// cards for the directory page
const url = 'https://libbiethornton.github.io/wdd230/portal/chamber/data.json';

async function getCompanyData(url) {
  const response = await fetch(url);
  const data = await response.json();
  displayCompanies(data.companies);
};

getCompanyData(url);

const displayCompanies = (companies) => {
  const cards = document.querySelector('div.cards');

  companies.forEach((company) => {
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');

    h3.textContent = `${company.business}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    website.textContent = `${company.website}`;

    logo.setAttribute('src', company.imageurl);
    logo.setAttribute('alt', `${company.business} logo`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '340');

    card.appendChild(h3);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    cards.appendChild(card);

  })
};

