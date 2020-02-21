const PeopleType = require('../schema/People');
const {
	GraphQLInt
} = require('graphql');

const getPeople = {
	type: PeopleType,
	args: {
		id: {
			type: GraphQLInt,
			description: 'Id of the people'
		}
	},
	resolve: async (_source, { id }, { dataSources }) => {
		return dataSources.swAPI.getPeople(id);
	}
};

module.exports = getPeople;
