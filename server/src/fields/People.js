const { createPromisesFromUrls } = require('../utils');
const { GraphQLList } = require('graphql');

/**
 * Get people
 *
 * @param {String} key Object key from the category
 * (planets.residents, species.people, starships.pilots, vehicles.pilots)
 *
 * @return {Object} Schema definition object type
 */
module.exports = ({ key }) => {
	return {
		type: GraphQLList(require('../schema/People')),
		description: 'People',
		resolve (_source, _args, { dataSources }) {
			return createPromisesFromUrls({
				key: 'people',
				urls: _source[key],
				method: dataSources.swAPI.getCategory.bind(dataSources.swAPI)
			});
		}
	};
};
