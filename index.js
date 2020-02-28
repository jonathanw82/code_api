console.log("hi");

function search() {

    // Getting user Input   
    var user_input = document.getElementById("user_input").value;
    console.log(user_input);


// Calling the API

// Building the request object
// Admit the following
var api_request = new XMLHttpRequest();

//
api_request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        // function to be ran upon recieveing a responce
        the_response = api_request.responseText; // responce = data
        // displayResults(the_responce);
        console.log(the_response);
    }
    else {

        // function to be called upon recieveing a failing responce
        console.log("this stuff is not working");
    }
};

// understand the following
endpoint = "https://api.openweathermap.org/data/2.5/weather?";    // who (www.example.com) - what server
query = "q=" + user_input;                                        // what data do you want ?
key = "&appid=7816d9f235c88adc096427a68ca872f2";                  // key to identify yourself to the server
the_url = endpoint + query + key                                  // elemants for all api call(maybe not the key if open api)



api_request.open("GET", the_url, true);         // Admit "GET" (method) and "true"
api_request.send();

};