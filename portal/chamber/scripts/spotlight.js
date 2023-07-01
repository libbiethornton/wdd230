const url2 = 'https://libbiethornton.github.io/wdd230/portal/chamber/data.json';

async function getCompanyData(url2) {
  const response = await fetch(url2);
  const data = await response.json();
  // console.table(data.companies);
    let fancyArray = data.companies.filter(checkStatus);
    let three = getRandom(fancyArray);
    displayRandom(three);


    function checkStatus(company) {
        if (company.membership == "gold" || company.membership == "silver"){
            return company;
        };
    };

    function getRandom(fancyArray) {
        const n = 3;
        const group = fancyArray.sort(() => 0.5 - Math.random());
        const finalGroup = group.slice(0, n); 
        return finalGroup;
    };
};






const displayRandom = (three) => {
    
        const cards = document.querySelector('.spotlight');
      
        three.forEach((company) => {
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
      
      const display = document.querySelector(".spot");


getCompanyData(url2);