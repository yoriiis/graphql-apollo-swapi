const PlanetType = require('../schema/Planet');
const {
	GraphQLInt,
	GraphQLList
} = require('graphql');

const getAllPlanet = {
	type: new GraphQLList(PlanetType),
	args: {
		page: {
			type: GraphQLInt,
			description: 'Page number'
		},
		limit: {
			type: GraphQLInt,
			description: 'Count of result'
		},
		offset: {
			type: GraphQLInt,
			description: 'Offset for the research'
		}
	},
	resolve: async (_source, { page, limit, offset }, { dataSources }) => {
		return dataSources.swAPI.getAllPlanet({ page, limit, offset }).then(response => response.results);
	}
};

module.exports = getAllPlanet;
