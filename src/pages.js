const database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {

	index(request, response) {
		return response.render('index')
	},

	async orphanage(request, response) {

		const id = request.query.id

		try {
			const db = await database
			const results = await db.all(`SELECT * FROM orphanages WHERE id ="${id}"`)
			const orphanage = results[0]

			orphanage.images = orphanage.images.split(",")
			orphanage.firstImage = orphanage.images[0]

			if(orphanage.open_on_weekends == "0") {
				orphanage.open_on_weekends = false
			} else {
				orphanage.open_on_weekends = true
			}

			return response.render('orphanage', {orphanage})
		} catch (error) {
			console.error(error)
			return response.send('Erro db')
		}
	},

	async orphanages(request, response) {
		try {
			const db = await database
			const orphanages = await db.all("SELECT * FROM orphanages")
			return response.render('orphanages', {orphanages})
		} catch (error) {
			console.log(error)
			return response.send('Erro banco de dados')
		}
	},

	createOrphanage(request, response) {
		return response.render('create-orphanage')
	},

	async saveOrphanage(request, response) {
		const fields = request.body

		//validar se os campos tao preenchidos

		if(Object.values(fields).includes('')){
			return response.send('Todos os campos devem ser preenchidos')
		}

		try {
			const db = await database
			await saveOrphanage(db, {
			lat: fields.lat,
			lng: fields.lng,
			name: fields.name,
			about: fields.about,
			whatsapp: fields.whatsapp,
			images: fields.images.toString(),
			instructions: fields.instructions,
			opening_hours: fields.opening_hours,
			open_on_weekends: fields.open_on_weekends,
		})
			//redirect
			return response.redirect('/orphanages')
		} catch (error) {
			console.log(error)
			return response.send('Erro no dbase')
		}

	}
}