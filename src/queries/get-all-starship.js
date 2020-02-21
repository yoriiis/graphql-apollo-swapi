const StarshipType = require('../schema/Starships');
const {
	GraphQLInt,
	GraphQLList
} = require('graphql');

const getAllStarship = {
	type: new GraphQLList(StarshipType),
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
		return dataSources.swAPI.getAllStarship({ page, limit, offset }).then(response => response.results);
	}
};

module.exports = getAllStarship;
