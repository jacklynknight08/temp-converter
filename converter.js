console.log("Temperature Converter");

// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to
// fahrenheit.

// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number
// should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that
// happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.

var inputTemp = document.getElementById("temp-input");
var outputTemp = document.getElementById("converted-temp");
var fahRadio = document.getElementById("fahrenheit");
var celRadio = document.getElementById("celsius");
var outputDiv = document.getElementById("converted-temp");
var clear = document.getElementById("clear");

function toCelsius(degreeC) {
	var outputTemp = (degreeC - 32) / 1.8;
	return outputTemp;
};

function toFahrenheit(degreeF) {
	var outputTemp = degreeF * 1.8 + 32;
	return outputTemp;
};


// // Get a reference to the button element in the DOM

var button = document.getElementById("convert");

// // This function should determine which conversion should
// // happen based on which radio button is selected.

function determineConverter (clickEvent) {
  console.log("event", clickEvent);
  console.log(inputTemp.value);
  var outputTemp;

  if(fahRadio.checked) {
  	outputTemp = toFahrenheit(inputTemp.value);
  	color(outputTemp, 90, 32);
  }
  else if (celRadio.checked) {
    outputTemp = toCelsius(inputTemp.value);
    color(outputTemp, 32, 0);
  }
  console.log(outputTemp);
  outputDiv.innerHTML = outputTemp;
};

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

clear.addEventListener("click", function() {
	fahRadio.checked = false;
	celRadio.checked = false;
	inputTemp.value = "";
});

inputTemp.addEventListener("keypress", function(event){
	console.log(event);
	if(event.charcode === 13) {
		determineConverter(event);
	}
});

function color(temp, hot, cold){
	if (temp >= hot){
		outputDiv.style.color = "red";
	}
	else if(temp <= cold){
		outputDiv.style.color = "blue";
	}
	else {
		outputDiv.style.color = "green";
	}
};