const StarshipType = require('../schema/Starships');
const {
	GraphQLInt
} = require('graphql');

const getStarship = {
	type: StarshipType,
	args: {
		id: {
			type: GraphQLInt,
			description: 'Id of the starship'
		}
	},
	resolve: async (_source, { id }, { dataSources }) => {
		return dataSources.swAPI.getStarship(id);
	}
};

module.exports = getStarship;
