// Create a map object.
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 4
  });
  
  // Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);


var earthquake = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

d3.json(earthquake).then(function (data) {
    
    createFeatures(data.features);
});


