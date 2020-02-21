const PlanetType = require('../schema/Planet');
const {
	GraphQLInt,
	GraphQLString
} = require('graphql');

const getPlanet = {
	type: PlanetType,
	args: {
		id: {
			type: GraphQLInt,
			description: 'Id of the planet'
		},
		name: {
			type: GraphQLString,
			description: 'Name of the planet'
		}
	},
	resolve: async (_source, { id, name }, { dataSources }) => {
		const isSearch = typeof name !== 'undefined' && typeof id === 'undefined';
		return dataSources.swAPI.getPlanet({ id, name }).then(response => {
			return isSearch ? response.results[0] : response;
		});
	}
};

module.exports = getPlanet;
