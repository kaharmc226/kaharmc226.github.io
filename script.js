// Example for Web Mercator (EPSG:3857)
var crs = L.CRS.EPSG3857;
var map = L.map('map', { crs: crs }).setView([-3.9884109568994335, 122.52304295831928], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Example: Converting UTM 51S (300000, 7395000) to WGS84
var utm_ne = 
var [lng, lat] = proj4("EPSG:32751", "EPSG:4326", [300000, 7395000]);
console.log(lat, lng); // e.g., -23.5505, -46.6333

// Define the image bounds (southwest and northeast corners)
var imageBounds = [
    [460851.497, 9549904.311], // southwest
    [438756.099, 9568134.933]  // northeast
];

// Add the PNG overlay
var overlay = L.imageOverlay('Maps/hasil.png', imageBounds).addTo(map);