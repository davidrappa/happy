// create map
const map = L.map("mapid").setView([-22.7236692, -47.4308622], 12);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
	iconUrl: "/images/map-marker.svg",
	iconSize: [58, 58],
	iconAnchor: [29, 68],
});

let marker;

// creater and add marker
map.on("click", (event) => {
	const lat = event.latlng.lat;
	const lng = event.latlng.lng;

	document.querySelector('[name=lat]').value = lat;
	document.querySelector('[name=lng]').value = lng;

	// remove icon
	marker && map.removeLayer(marker);

	// add icon layer
	marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar o campo de fotos

function addPhotoField() {
	// pegar o container de fotos #images
	const container = document.querySelector('#images');
	// pegar o container para duplicar .new-image
	const fieldsContainer = document.querySelectorAll('.new-upload');
	// realizar o clone da ultima imagem adicionada
	const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
	// verificar se o campo esta vazio, se sim, nao vai adicionar ao container de fotos
	const input = newFieldContainer.children[0]

	if (input.value == "") {
		return
	} else {
		//limpar o campo antes de add ao container
		newFieldContainer.children[0].value = ""
		// adicionar o clone ao container de #images
		container.appendChild(newFieldContainer);
	}
}

function deleteField(event) {
	const span = event.currentTarget;

	const fieldsContainer = document.querySelectorAll('.new-upload');

	if (fieldsContainer.length <= 1) {
		// limpar o valor do campo
		span.parentNode.children[0].value = "";
		return
	} else {
		// remove o node inteiro
		span.parentNode.remove()
	}
}

// selecionar sim ou nao 

function toggleSelect(event) {
	//retirar a classe active dos botoes
	document.querySelectorAll('.button-select button')
	.forEach((button) => { button.classList.remove('active') });

	// colocar a classe active
	const button = event.currentTarget
	button.classList.add('active');

	//atualizar meu input hidden com o valor selecionado
	const input = document.querySelector('[name="open_on_weekends"]');

	// verificar se é sim ou nao
	input.value = button.dataset.value


}

// function validate(event) {
// 	const inputLat = document.querySelector('.input-lat');
// 	const inputLng = document.querySelector('.input-lng');

// 	if (inputLat && inputLng == true) {
// 		 event.preventDefault()
// 		 alert('Form nao preenchido')
// 	} else {
// 		alert('Form foi preenchido')
// 	}
// }

