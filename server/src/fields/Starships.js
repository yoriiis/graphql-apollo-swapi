const { createPromisesFromUrls } = require('../utils');
const { GraphQLList } = require('graphql');

/**
 * Get starships
 *
 * @return {Object} Schema definition object type
 */
module.exports = () => {
	return {
		type: GraphQLList(require('../schema/Starships')),
		description: 'Starships of the person',
		resolve (_source, _args, { dataSources }) {
			return createPromisesFromUrls({
				key: 'starships',
				urls: _source.starships,
				method: dataSources.swAPI.getCategory.bind(dataSources.swAPI)
			});
		}
	};
};
