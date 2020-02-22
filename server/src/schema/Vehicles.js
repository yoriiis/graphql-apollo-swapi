const getPeople = require('../fields/People');
const getFilms = require('../fields/Films');
const {
	GraphQLObjectType,
	GraphQLString
} = require('graphql');

const VehiclesType = new GraphQLObjectType({
	name: 'Vehicles',
	fields: () => ({
		name: {
			type: GraphQLString,
			description: 'Name of the vehicle'
		},
		model: {
			type: GraphQLString,
			description: 'Model of the vehicle'
		},
		manufacturer: {
			type: GraphQLString,
			description: 'Manufacturer of the vehicle'
		},
		cost_in_credits: {
			type: GraphQLString,
			description: 'Cost in credit of the vehicle'
		},
		length: {
			type: GraphQLString,
			description: 'Length of the vehicle'
		},
		max_atmosphering_speed: {
			type: GraphQLString,
			description: 'Max atmosphering speed of the vehicle'
		},
		crew: {
			type: GraphQLString,
			description: 'Crew of the vehicle'
		},
		passengers: {
			type: GraphQLString,
			description: 'Passengers of the vehicle'
		},
		cargo_capacity: {
			type: GraphQLString,
			description: 'Cargo capacity of the vehicle'
		},
		consumables: {
			type: GraphQLString,
			description: 'Consumables of the vehicle'
		},
		vehicle_class: {
			type: GraphQLString,
			description: 'Vehicle class'
		},
		pilots: getPeople({ key: 'pilots' }),
		films: getFilms(),
		created: {
			type: GraphQLString,
			description: 'Created date of the vehicle'
		},
		edited: {
			type: GraphQLString,
			description: 'Edited date of the vehicle'
		},
		url: {
			type: GraphQLString,
			description: 'Url of the vehicle'
		}
	})
});

module.exports = VehiclesType;
