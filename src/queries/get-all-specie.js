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
		return dataSources.swAPI.getAllSpecie({ page, limit, offset }).then(response => response.results);
	}
};

module.exports = getAllSpecie;
