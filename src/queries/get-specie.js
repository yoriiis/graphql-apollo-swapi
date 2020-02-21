const SpecieType = require('../schema/Specie');
const {
	GraphQLInt
} = require('graphql');

const getSpecie = {
	type: SpecieType,
	args: {
		id: {
			type: GraphQLInt,
			description: 'Id of the specie'
		}
	},
	resolve: async (_source, { id }, { dataSources }) => {
		return dataSources.swAPI.getSpecie(id);
	}
};

module.exports = getSpecie;
