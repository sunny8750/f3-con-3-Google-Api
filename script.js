// alert("hi")



var lt = document.getElementById("lt");
var lng = document.getElementById("lng");


function getLocation() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    var MAP = document.getElementById("map");
    MAP.style.display = "block";
  } else {
    MAP.innerHTML = "API is not supported by the user's browser.";
  }
}

function showPosition(position) {
     lt.innerHTML = "Latitude: " + position.coords.latitude ;
     lng.innerHTML = "Longitude:" + position.coords.longitude;
    localStorage.setItem("Lat", lt.innerHTML);
    localStorage.setItem("Long", lng.innerHTML);
  }

  function RemoveLocation(){
    localStorage.removeItem("Lat")
    localStorage.removeItem("Long")
    lt.innerHTML="Lat has been removed";
    lng.innerHTML="Long has been removed";
 }
  
