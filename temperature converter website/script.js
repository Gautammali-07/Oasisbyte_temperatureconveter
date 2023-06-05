function convertTemperature() {
    var inputTemperature = document.getElementById("inputTemperature").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var resultElement = document.getElementById("result");
    var result;

    if (inputUnit === "celsius") {
        result = convertCelsius(inputTemperature);
        resultElement.innerHTML = result + " °F / " + (result + 273.15) + " K";
    } else if (inputUnit === "fahrenheit") {
        result = convertFahrenheit(inputTemperature);
        resultElement.innerHTML = result + " °C / " + ((result - 32) * 5/9 + 273.15) + " K";
    } else if (inputUnit === "kelvin") {
        result = convertKelvin(inputTemperature);
        resultElement.innerHTML = (result - 273.15) + " °C / " + ((result - 273.15) * 9/5 + 32) + " °F";
    }
}

function convertCelsius(temperature) {
    return (temperature * 9/5) + 32;
}

function convertFahrenheit(temperature) {
    return (temperature - 32) * 5/9;
}

function convertKelvin(temperature) {
    return parseFloat(temperature);
}
