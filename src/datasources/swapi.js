const { RESTDataSource } = require('apollo-datasource-rest');

class SwAPI extends RESTDataSource {
	constructor () {
		super();
		this.baseURL = 'https://swapi.co/api/';
	}

	async getPeople (id) {
		return this.get(`people/${id}`);
	}

	async getAllPeople (page = 1) {
		return this.get(`people?page=${page}`);
	}

	async getFilm (id) {
		return this.get(`films/${id}`);
	}

	async getPlanet ({ id, name }) {
		let url = '';
		if (id) {
			url = `planets/${id}`;
		} else if (name) {
			url = `planets?search=${name}`;
		}
		return this.get(url);
	}

	async getSpecie (id) {
		return this.get(`species/${id}`);
	}

	async getAllSpecie (page = 1) {
		return this.get(`species?page=${page}`);
	}

	async getStarship (id) {
		return this.get(`starships/${id}`);
	}

	async getVehicles (id) {
		return this.get(`vehicles/${id}`);
	}
}

module.exports = SwAPI;
