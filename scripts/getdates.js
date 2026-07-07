const year = document .querySelector("#currentyear");
const lasModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;
