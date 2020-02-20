const { RESTDataSource } = require('apollo-datasource-rest');

class SwAPI extends RESTDataSource {
	constructor () {
		super();
		this.baseURL = 'https://swapi.co/api/';
	}

	async getPeople (id) {
		return this.get(`people/${id}`);
	}

	async getFilms (id) {
		return this.get(`films/${id}`);
	}
}

module.exports = SwAPI;
