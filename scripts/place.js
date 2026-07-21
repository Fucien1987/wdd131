const year = document.querySelector("#currentyear");
const lasModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const temperature = 10;
const windSpeed = 5

function calculateWindChill(temp,speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed,0.16)
    ).toFixed(1)
}
let windChill = "N/A";

if (temperature <= 10 && windSpeed> 4.8) {
    windChill = `${calculateWindChill(temperature,windSpeed)} °C`;
}

document.querySelector("#wind-chill").textContent = windChill;