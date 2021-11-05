url = window.location.href;
if( url.match(/blog/) ) {
    myFunc()
}

function myFunc(){
let lastUrl = url.slice(23);
console.log(lastUrl);

//var encodedString = btoa(lastUrl);
//console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

// Decode the String
let decodedString = atob(lastUrl);
forCheck = decodedString;
let match = forCheck.substring(0, 23)
if (match == "https://alltodays.tech/");
    window.location.replace(decodedString);

}