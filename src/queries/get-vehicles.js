const VehiclesType = require('../schema/Vehicles');
const {
	GraphQLInt
} = require('graphql');

const getVehicles = {
	type: VehiclesType,
	args: {
		id: {
			type: GraphQLInt,
			description: 'Id of the vehicles'
		}
	},
	resolve: async (_source, { id }, { dataSources }) => {
		return dataSources.swAPI.getVehicles(id);
	}
};

module.exports = getVehicles;
