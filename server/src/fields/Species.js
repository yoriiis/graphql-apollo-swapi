const { createPromisesFromUrls } = require('../utils');
const { GraphQLList } = require('graphql');

/**
 * Get species
 *
 * @return {Object} Schema definition object type
 */
module.exports = () => {
	return {
		type: GraphQLList(require('../schema/Species')),
		description: 'Specie of the person',
		resolve (_source, _args, { dataSources }) {
			return createPromisesFromUrls({
				key: 'species',
				urls: _source.species,
				method: dataSources.swAPI.getCategory.bind(dataSources.swAPI)
			});
		}
	};
};
