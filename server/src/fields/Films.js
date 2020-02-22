const { createPromisesFromUrls } = require('../utils');
const { GraphQLList } = require('graphql');

/**
 * Get films
 *
 * @return {Object} Schema definition object type
 */
module.exports = () => {
	return {
		type: GraphQLList(require('../schema/Films')),
		description: 'Films of the person',
		resolve (_source, _args, { dataSources }) {
			return createPromisesFromUrls({
				key: 'films',
				urls: _source.films,
				method: dataSources.swAPI.getCategory.bind(dataSources.swAPI)
			});
		}
	};
};
