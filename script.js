// Example for Web Mercator (EPSG:3857)
var crs = L.CRS.EPSG3857;
var map = L.map('map', { crs: crs }).setView([-3.9884109568994335, 122.52304295831928], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Example: Converting UTM 51S (300000, 7395000) to WGS84

// Define the image bounds (southwest and northeast corners)
var imageBounds = [
    [438782.557, 9549938.178], // southwest
    [460822.393, 9568035.714]  // northeast
];

// Add the PNG overlay
var overlay = L.imageOverlay('Maps/hasil.png', imageBounds).addTo(map);