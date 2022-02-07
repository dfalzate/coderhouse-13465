const fs = require('fs')

// const data1 = {
//   id: 1,
//   product: {
//       title: 'Escuadra',
//       price: 123.45,
//       thumbnail:
//           'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
//   }
// }

const p1 = {
	title: 'Escuadra',
	price: 123.45,
	thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
}

const p2 = {
	title: 'Calculadora',
	price: 234.56,
	thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
}

const p3 = {
	title: 'Globo Terráqueo',
	price: 345.67,
	thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
}

class Contenedor {
	constructor(archivo) {
		this.archivo = archivo
		this.id = 0
		this.data = [p1, p2, p3]
	}

	async save(obj) {
		await this.getAll()
		this.id++
		this.data.push({
			id: this.id,
			product: obj,
		})
		try {
			await fs.promises.writeFile(this.archivo, JSON.stringify(this.data))
		} catch (error) {
			console.log(error)
		}
	}
	getByID(id) {}
	async getAll() {
		try {
			const data = await fs.promises.readFile(this.archivo, 'utf-8')
			if (data) {
				this.data = JSON.parse(data)
				this.data.map((producto) => {
					if (this.id < producto.id) this.id = producto.id
				})
			}
		} catch (error) {
			return
		}
	}
	deleteById(id) {}
	deleteAll() {}
}

const lista = new Contenedor('archivo.txt')

async function newFunction() {
	await lista.save(p1)
	await lista.save(p2)
	await lista.save(p3)
	console.log('siguio')
}

newFunction()
