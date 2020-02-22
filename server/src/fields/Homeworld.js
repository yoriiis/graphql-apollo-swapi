const { getIdFromUrl } = require('../utils');

/**
 * Get homeworld
 *
 * @return {Object} Schema definition object type
 */
module.exports = () => {
	return {
		type: require('../schema/Planets'),
		description: 'Homeworld of the person',
		resolve (_source, _args, { dataSources }) {
			const planetId = getIdFromUrl(_source.homeworld);
			return dataSources.swAPI.getCategory({ key: 'planets', id: planetId });
		}
	};
};
