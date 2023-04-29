let x = document.lastModified;
document.getElementById("updated").innerHTML = "Last updated: " + x;

let currentYear = new Date().getFullYear();
document.querySelector("span").innerHTML = currentYear