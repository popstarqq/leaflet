const Leaflet=require("leaflet");
const leafletBasemaps=require("leaflet-basemaps");
import basemapscss from "../node_modules/leaflet-basemaps/L.Control.Basemaps.css";
let map = L.map('map').setView([44.07, -118.78], 1);
  let basemaps = [
      L.tileLayer('http://t{s}.tianditu.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles', {
          maxZoom: 18,
          minZoom:1,
          attribution:'tianditu' , 
          subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"]
         }),
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'OSM',
          subdomains: 'abcd',
          maxZoom: 18,
          minZoom: 1,
          label: 'OSM'
      }),
      L.tileLayer('http://localhost:8008/google/{z}/{x}/{y}.jpg', {
          attribution: 'tile',
          subdomains: 'abcd',
          maxZoom: 1,
          minZoom: 1,
          label: 'tile'
      })
  ];
  map.addControl(L.control.basemaps({
      basemaps: basemaps,
      tileX: 0,
      tileY: 0,
      tileZ: 1
  }));

