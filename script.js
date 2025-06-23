// Example for Web Mercator (EPSG:3857)
var crs = new L.Proj.CRS(
    'EPSG:32751',  // UTM Zone 51S
    proj4.defs('EPSG:32751'),  // Updated PROJ4 definition
    {
        resolutions: [  // Adjust resolutions as needed
            8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1
        ]
    }
);

var map = L.map('map', { crs: crs }).setView([-3.9884109568994335, 122.52304295831928], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Example: Converting UTM 51S (300000, 7395000) to WGS84
// Replace the projection definition with this:
proj4.defs("EPSG:32751", 
    "+proj=utm +zone=51 +south +datum=WGS84 +units=m +no_defs"
);
// Define the image bounds (southwest and northeast corners)
 var top = 9567816.47512;    // Northing (Y)
        var bottom = 9548204.24313;  // Northing (Y)
        var left = 437857.084245;   // Easting (X)
        var right = 461317.870398;  // Easting (X)

        // 5. Convert to Leaflet's SW/NE format [ [SW], [NE] ]
        var imageBounds = [
            [bottom, left],  // SW corner (Northing, Easting)
            [top, right]     // NE corner (Northing, Easting)
        ];

// Add the PNG overlay
L.imageOverlay('Maps/miringtp.png', imageBounds, {
    opacity: 0.8,
    interactive: true
}).addTo(map);

map.fitBounds(imageBounds);