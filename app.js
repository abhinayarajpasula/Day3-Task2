// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the URL endpoint
var url = "https://restcountries.com/v3.1/all";

// Open a new GET request
xhr.open("GET", url, true);

// Set up onload function to handle the response
xhr.onload = function () {
  // Check if the request was successful
  if (xhr.status >= 200 && xhr.status < 300) {
    // Parse the JSON response
    var countries = JSON.parse(xhr.responseText);

    // Get the container element to display flags
    var flagsContainer = document.getElementById("flagsContainer");

    // Loop through each country object
    countries.forEach(function(country) {
    // Log the flag URL for debugging
    console.log("Flag URL:", country.flags);
      // Check if the country object has a flag URL
      if (country.flags) {

        // Create an img element for the flag
        var flagImg = document.createElement("img");

        // Set the src attribute to the PNG flag URL
            flagImg.src = country.flags.png;

        // Set alt text (optional)
        flagImg.alt = country.name.common + " Flag";

        // Append the flag image to the container
        flagsContainer.appendChild(flagImg);
      }
    });
  } else {
    // Handle error if request fails
    console.error("Request failed with status: " + xhr.status);
  }
};

// Send the request
xhr.send();