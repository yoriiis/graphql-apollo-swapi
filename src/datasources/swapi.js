const { RESTDataSource } = require('apollo-datasource-rest');
const { requestFilterByLimitOffsetPage } = require('../functions');

class SwAPI extends RESTDataSource {
	constructor () {
		super();
		this.baseURL = 'https://swapi.co/api/';
	}

	async getAllByCategory ({ key, page = 1, limit = null, offset = 0 }) {
		const context = this;
		return requestFilterByLimitOffsetPage({
			key, context, page, limit, offset
		});
	}

	async getCategory ({ key, id, name }) {
		let url = '';
		if (id) {
			url = `${key}/${id}`;
		} else if (name) {
			url = `${key}?search=${name}`;
		}
		return this.get(url);
	}
}

module.exports = SwAPI;
