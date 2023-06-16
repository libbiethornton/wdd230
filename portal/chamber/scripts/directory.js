const url = 'https://libbiethornton.github.io/wdd230/portal/chamber/data.json';

async function getCompanyData(url) {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.companies);
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

    h3.textContent = company.business;
    address.textContent = company.address;
    phone.textContent = company.phone;
    website.textContent = company.website;

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

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
};
