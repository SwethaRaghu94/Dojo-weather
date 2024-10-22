
function weatherReport() {
    alert("Loading weather report...");
}



// let tempAnchors = document.querySelectorAll(".temps");

// console.log(tempAnchors);


// for (let i=0; i < tempAnchors.length; i++) {
//     let value =parseInt(tempAnchors[i].innerText);
//     let fahrenheit = (value * 9) / 5 + 32;
//     console.log(fahrenheit);
//     tempAnchors[i].innerText = Math.floor(fahrenheit);
// }
function toggleTemperature() {
    const tempToggle = document.getElementById("tempToggle").value;

    // Get all the temperature elements on the page (with class 'temps')
    const temperatureElements = document.querySelectorAll(".temps");

    // Loop through all temperature elements and convert them
    temperatureElements.forEach((tempElement) => {
        let currentTemp = parseFloat(tempElement.textContent); // Get current temperature value without the '°'

        // Check if Fahrenheit is selected and the temperatures are in Celsius
        if (tempToggle === 'F' && tempElement.dataset.unit !== 'F') {
            const newTemp = (currentTemp * 9/5) + 32; // Convert Celsius to Fahrenheit
            tempElement.textContent = newTemp.toFixed(1) + "°"; // Update temperature
            tempElement.dataset.unit = 'F'; // Mark as Fahrenheit
        }

        // Check if Celsius is selected and the temperatures are in Fahrenheit
        if (tempToggle === 'C' && tempElement.dataset.unit !== 'C') {
            const newTemp = (currentTemp - 32) * 5/9; // Convert Fahrenheit to Celsius
            tempElement.textContent = newTemp.toFixed(1) + "°"; // Update temperature
            tempElement.dataset.unit = 'C'; // Mark as Celsius
        }
    });
}

function removeCookie(){
    const element = document.getElementById("cookie");
    element.remove();
}


