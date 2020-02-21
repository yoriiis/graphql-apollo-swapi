const { RESTDataSource } = require('apollo-datasource-rest');
const { requestFilterByLimitOffsetPage } = require('../functions');

class SwAPI extends RESTDataSource {
	constructor () {
		super();
		this.baseURL = 'https://swapi.co/api/';
	}

	async getPeople (id) {
		return this.get(`people/${id}`);
	}

	async getAllPeople ({ page = 1, limit = null, offset = 0 }) {
		const key = 'people';
		const context = this;
		return requestFilterByLimitOffsetPage({
			key, context, page, limit, offset
		});
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

	async getAllPlanet ({ page = 1, limit = null, offset = 0 }) {
		const key = 'planets';
		const context = this;
		return requestFilterByLimitOffsetPage({
			key, context, page, limit, offset
		});
	}

	async getSpecie (id) {
		return this.get(`species/${id}`);
	}

	async getAllSpecie ({ page = 1, limit = null, offset = 0 }) {
		const key = 'species';
		const context = this;
		return requestFilterByLimitOffsetPage({
			key, context, page, limit, offset
		});
	}

	async getStarship (id) {
		return this.get(`starships/${id}`);
	}

	async getAllStarship ({ page = 1, limit = null, offset = 0 }) {
		const key = 'starships';
		const context = this;
		return requestFilterByLimitOffsetPage({
			key, context, page, limit, offset
		});
	}

	async getVehicles (id) {
		return this.get(`vehicles/${id}`);
	}

	async getAllVehicles ({ page = 1, limit = null, offset = 0 }) {
		const key = 'vehicles';
		const context = this;
		return requestFilterByLimitOffsetPage({
			key, context, page, limit, offset
		});
	}
}

module.exports = SwAPI;
