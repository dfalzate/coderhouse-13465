const axios = require('axios')

async function getMovies() {
	const responseFilms = await axios.get('https://swapi.dev/api/films/')
	const films = []
	responseFilms.data.results.map((film) => {
		films.push({
			title: film.title,
			planets: film.planets,
			characters: film.characters,
		})
	})
	await Promise.all(
		films.map(async (film, index) => {
			const planets = []
			await Promise.all(
				film.planets.map(async (planet) => {
					const { data } = await axios.get(planet)
					planets.push({
						name: data.name,
						terrain: data.terrain,
						gravity: data.gravity,
						diameter: data.diameter,
						population: data.population,
					})
				}),
			)
			const characters = []
			await Promise.all(
				film.characters.map(async (character) => {
					const { data } = await axios.get(character)
					characters.push({
						name: data.name,
						gender: data.gender,
						hair_color: data.hair_color,
					})
				}),
			)
			films[index].plantes = planets
			films[index].characters = characters
		}),
	)
	console.log(films)
}

getMovies()
