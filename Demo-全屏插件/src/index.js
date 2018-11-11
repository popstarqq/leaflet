const Leaflet=require("leaflet");
const fullscreen=require("../node_modules/leaflet.fullscreen/Control.FullScreen");
var map = L.map('map', {
     fullscreenControl: true
  }).setView([37.8, -96], 1);
layer = new L.tileLayer('http://localhost:8008/google/{z}/{x}/{y}.jpg', {
    minZoom: 1,
    maxZoom: 1
});
map.addLayer(layer);
