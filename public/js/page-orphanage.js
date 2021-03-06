// options orphanage.html

const options = {
	dragging: false,
	touchZoom: false,
	doubleClickzZoom: false,
	scrollWheelZoom: false,
	zoomControl: false,
}

const spanLat = document.querySelector('span[data-lat]').dataset.lat;
const spanLng = document.querySelector('span[data-lng]').dataset.lng;


// create map
const map = L.map('mapid', options).setView([spanLat, spanLng], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
	iconUrl: "/images/map-marker.svg",
	iconSize: [58, 58],
	iconAnchor: [29, 68],
	popupAnchor: [170, 2]
});

//create pop up

L
	.marker([spanLat, spanLng], { icon })
	.addTo(map)

// image gallery

function selectImage(event) {

	const button = event.currentTarget

	// remover todas as classes .active
	const buttons = document.querySelectorAll('.images button');
	buttons.forEach((button) => { button.classList.remove('active') })
	// selecionar a imagem clicada
	const image = button.children[0]
	const imageContainer = document.querySelector('.orphanage-details > img');
	// atualizar o container de imagem
	imageContainer.src = image.src
	// adicionar a classe .active para este botao
	button.classList.add('active')
}