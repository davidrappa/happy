// create map
const map = L.map('mapid').setView([-22.7236692,-47.4308622], 12);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
	iconUrl: "./assets/images/map-marker.svg",
	iconSize:[58,58],
	iconAnchor:[29,68],
	popupAnchor:[170, 2]
});

//create pop up overlay

const popup = L.popup({
	closeButton: false,
	className: 'map-popup',
	minWidth: 240,
	minHeight: 240,
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./assets/images/arrow-white.svg"> </a>')

//create pop up
L
.marker([-22.7236692,-47.4308622], {icon})
.addTo(map)
.bindPopup(popup)