const database = require('./db');
const saveOrphanage = require('./saveOrphanage');

database.then(async db => {
	//inserir dados na tabela
	await saveOrphanage(db, {
		lat: "-27.222633",
		lng: "-49.6555874",
		name: "Lar das meninas",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptatum",
		images: [
			"https://images.unsplash.com/photo-1616446787875-83e1559ef554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIxMjEzNzY3&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
			"https://images.unsplash.com/photo-1617041882688-9c3996d3e214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIxMjEzNzk4&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
		].toString(),
		instructions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem",
		opening_hours: "horario das visitas das 8 as 18h",
		open_on_weekends: "0"
	})
	// consultar dados na tabela
	const selectedOrphanages = await db.all("SELECT * FROM orphanages")
	console.log(selectedOrphanages)

	// consultar um orphanato, pelo id

	// const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
	// console.log(orphanage)

	// deletar dado da tabela 
	// await db.run('DELETE FROM orphanages')
})