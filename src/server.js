// importar dependencia pacote lib
const express = require('express');
const pages = require('./pages.js')
const path = require('path');
const server = express();

server
	// utilziar body do req
	.use(express.urlencoded({extended:true}))
	// utilizar arquivos estaticos
	.use(express.static('public'))

	//configurar template engine
	.set('views', path.join(__dirname, "views"))
	.set('view engine', 'hbs')
	
	// criação de rota
	.get('/', pages.index)
	.get('/orphanage', pages.orphanage)
	.get('/orphanages', pages.orphanages)
	.get('/create-orphanage', pages.createOrphanage)
	.post('/save-orphanage', pages.saveOrphanage)

// ligar o servidor
server.listen(5500)