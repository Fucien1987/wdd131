let reviews = Number(localStorage.getItem("reviewCount")) || 0;
reviews++;
localStorage.setItem("reviewCount", reviews);

document.querySelector("#reviewCount").textContent = reviews;

// Footer
document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;