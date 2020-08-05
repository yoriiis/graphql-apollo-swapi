const { RESTDataSource } = require('apollo-datasource-rest');
const { requestFilterByLimitOffsetPage } = require('../utils');

class SwAPI extends RESTDataSource {
	constructor () {
		super();
		this.baseURL = 'https://swapi.dev/api/';
	}

	/**
	 * Get all results by category with filter parameter
	 *
	 * @param {String} key Category for the query
	 * @param {Int} page Index of the page for the request pagination
	 * @param {Int} limit Limit of results (zero is no limit)
	 * @param {Int} offset Offset for the research (start index at the offset)
	 *
	 * @return {Promise<Object>} Result of the promise request
	 */
	async getAllByCategory ({ key, page = 1, limit = null, offset = 0 }) {
		const context = this;
		return requestFilterByLimitOffsetPage({
			key, context, page, limit, offset
		});
	}

	/**
	 * Get result from filtered category
	 * Request can be search by id or name
	 *
	 * @param {String} key Category for the query
	 * @param {Int} id Id of the result category
	 * @param {Int} name Name of the result category
	 *
	 * @return {Promise<Object>} Result of the promise request
	 */
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
