var map = L.map('map').setView([-3.9884109568994335, 122.52304295831928], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Define the image bounds (southwest and northeast corners)
var imageBounds = [
    [460851.497, 9549904.311], // southwest
    [438756.099, 9568134.933]  // northeast
];

// Add the PNG overlay
var overlay = L.imageOverlay('New Folder/hasil.png', imageBounds).addTo(map);