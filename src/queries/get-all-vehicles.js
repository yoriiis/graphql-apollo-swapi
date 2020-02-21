const VehiclesType = require('../schema/Vehicles');
const {
	GraphQLInt,
	GraphQLList
} = require('graphql');

const getAllVehicles = {
	type: new GraphQLList(VehiclesType),
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
		return dataSources.swAPI.getAllVehicles({ page, limit, offset }).then(response => response.results);
	}
};

module.exports = getAllVehicles;
