const PeopleType = require('../schema/People');
const {
	GraphQLInt,
	GraphQLList
} = require('graphql');

const getAllPeople = {
	type: new GraphQLList(PeopleType),
	args: {
		page: {
			type: GraphQLInt,
			description: 'Page number'
		}
	},
	resolve: async (_source, { page }, { dataSources }) => {
		return dataSources.swAPI.getAllPeople(page).then(response => response.results);
	}
};

module.exports = getAllPeople;
