// Create a Leaflet map
const map = L.map('my-map').setView([35.7596, -79.0193], 10);
// Marker to save the position of found address
let marker;

// API key call
const myAPIKey = "9ee5fa8f90b149dc82d7a4f9da45a346";

// Retina displays require different mat tiles quality
const isRetina = L.Browser.retina;
const baseUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
const retinaUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";

// add Geoapify attribution
map.attributionControl.setPrefix('Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a>')

// Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
L.tileLayer(isRetina ? retinaUrl : baseUrl, {
  attribution: '<a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
  apiKey: myAPIKey,
  maxZoom: 20,
  id: 'osm-bright',
}).addTo(map);

// move zoom controls to bottom right
// map.zoomControl.remove();
// L.control.zoom({
//   position: 'bottom-right'
// }).addTo(map);
var address;
function geocodeAddress() {
  if (marker) {
    marker.remove();
  }

  address = document.getElementById("address");
  address = address.value;

  if (!address) {
    address = stadiumAddress;
  }

  if (!address || address.length < 3) {
    document.getElementById("status").textContent = "The address string is too short. Enter at least three symbols";
    return;
  }
  geoCodeAPICall();
};
function geoCodeAPICall(){
  const geocodingUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${myAPIKey}`;

  // call Geocoding API - https://www.geoapify.com/geocoding-api
  fetch(geocodingUrl).then(result => result.json())
    .then(featureCollection => {
      if (featureCollection.features.length === 0) {
        document.getElementById("status").textContent = "The address is not found";
        return;
      }

      const foundAddress = featureCollection.features[0];
      document.getElementById("name").value = foundAddress.properties.name || '';
      document.getElementById("house-number").value = foundAddress.properties.housenumber || '';
      document.getElementById("street").value = foundAddress.properties.street || '';
      document.getElementById("postcode").value = foundAddress.properties.postcode || '';
      document.getElementById("city").value = foundAddress.properties.city || '';
      document.getElementById("state").value = foundAddress.properties.state || '';
      document.getElementById("country").value = foundAddress.properties.country || '';

      document.getElementById("status").textContent = `Found address: ${foundAddress.properties.formatted}`;

      marker = L.marker(new L.LatLng(foundAddress.properties.lat, foundAddress.properties.lon)).addTo(map);
      map.panTo(new L.LatLng(foundAddress.properties.lat, foundAddress.properties.lon));
    });

  saveSearch()
}

// save searches to localStorage

var userSearch;

function saveSearch() {

  userSearch = JSON.parse(localStorage.getItem("userSearch")) || [];

  if (!userSearch.includes(address)) {
    userSearch.push(address);
  }

  localStorage.setItem("userSearch", JSON.stringify(userSearch));
  recentSearches()
};

var createItem = function (element, className){
  var newItem = document.createElement(element);
  newItem.setAttribute("class", className);
  return newItem;
};

// global variable
var search;
var options;

//get list container and create div and select elements

var dropDownContainer = document.querySelector(".address-line");
var dropdownContent = createItem("div", "dropdownContent");
var optionListArray = [];
var optionItemEl 
var selectItemEl = createItem("select", "dropdown");

selectItemEl.onchange = function(){
  address = selectItemEl.value;
  geoCodeAPICall();
  
};

dropDownContainer.appendChild(dropdownContent);
dropdownContent.appendChild(selectItemEl);

// create list option elements from recent searches

function recentSearches() {
  address = "";
  for (var i = 0; i < userSearch.length; i++) {
    // console.log(userSearch[i]); 
    search = userSearch[i];
      if(!optionListArray.includes(search)){
        optionListArray.push(search);
        optionItemEl = createItem("option", "recentSearch");
        optionItemEl.setAttribute("value", search);
        optionItemEl.innerHTML = search;
        selectItemEl.appendChild(optionItemEl);
    }
   
  }

};