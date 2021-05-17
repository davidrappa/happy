// create map
const map = L.map('mapid').setView([-22.7236692,-47.4308622], 12);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
	iconUrl: "/images/map-marker.svg",
	iconSize:[58,58],
	iconAnchor:[29,68],
	popupAnchor:[170, 2]
});

function addMarker({id, name, lat,lng}) {
	//create pop up overlay
	const popup = L.popup({
		closeButton: false,
		className: 'map-popup',
		minWidth: 240,
		minHeight: 240,
	}).setContent(`${name} <a href="/orphanage?id=${id}" class="choose-orphanage"><img src="/images/arrow-white.svg"> </a>`)
	
	//create pop up
	L
	.marker([lat,lng], {icon})
	.addTo(map)
	.bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');

orphanagesSpan.forEach( span => {
	const orphanage = {
		id: span.dataset.id,
		name: span.dataset.name,
		lat: span.dataset.lat,
		lng: span.dataset.lng,
	}

	addMarker(orphanage)
})




