// In Header:
// Weather Dashboard with Colored Background 



//WHEN the user clicks the search button

function handleSearch() {

//THEN I get the value that they entered into the search input
    makeWeatherRequest( search );

};

function makeWeatherRequest( search ) {



// NEXT, we heed to build the URL for the first API request
// EXAMPLE: api.openweathermap.org/data/2.5/weather?q=Seattle&appid=2b68c2816c3aae5fb2825c4d8e7437f5
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// API: 2b68c2816c3aae5fb2825c4d8e7437f5

// NEXT, make the request to the URL with jQuery ajax

$.ajax( queryURL ).then( function(response) {

    //THEN get the lat and lon out of the 'response' object

    // NEXT call makeOneCallRequest( ) and pass in lat and lon




});

//OneCall API for UV and 5 day forecast
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={API key}
//EXAMPLE: https://api.openweathermap.org/data/2.5/onecall?lat=47.61&lon=-122.33&appid=2b68c2816c3aae5fb2825c4d8e7437f5
//API: 2b68c2816c3aae5fb2825c4d8e7437f5

}

function makeOneCallRequest ( lat, lon ) {

    $.ajax( queryURL ).then(function(response) {

        // Finish rendering data to the HTML

    })

}














// on left:
// Search for a City:
// search bar with magnifying glass icon to click and search (form input)
// names of cities below in search history and saves to local storage -->

// <!--in middle of page
// City Name (date) (icon of current weather conditions)
// Temperature
// Humidity
// Wind Speed MPH
// UV Index-->

// <!-- uv index will need a separate call -->

// <!-- Below the current data:
// 5-Day Forcast:
// Cards with data and icon of predicted weather forcast temp, humidity and wind speed -->

// <!-- will need separate forecast endpoint -->

// <!-- chain together multiple ajax call -->