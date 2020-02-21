const SpecieType = require('../schema/Specie');
const {
	GraphQLInt,
	GraphQLList
} = require('graphql');

const getAllSpecie = {
	type: new GraphQLList(SpecieType),
	args: {
		page: {
			type: GraphQLInt,
			description: 'Page number'
		}
	},
	resolve: async (_source, { page }, { dataSources }) => {
		return dataSources.swAPI.getAllSpecie(page).then(response => response.results);
	}
};

module.exports = getAllSpecie;
