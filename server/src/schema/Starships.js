const getPeople = require('../fields/People');
const getFilms = require('../fields/Films');
const {
	GraphQLObjectType,
	GraphQLString
} = require('graphql');

const StarshipsType = new GraphQLObjectType({
	name: 'Starships',
	fields: () => ({
		name: {
			type: GraphQLString,
			description: 'Name of the starship'
		},
		model: {
			type: GraphQLString,
			description: 'Model of the starship'
		},
		manufacturer: {
			type: GraphQLString,
			description: 'Manufacturer of the starship'
		},
		cost_in_credits: {
			type: GraphQLString,
			description: 'Cost in credit of the starship'
		},
		length: {
			type: GraphQLString,
			description: 'Length of the starship'
		},
		max_atmosphering_speed: {
			type: GraphQLString,
			description: 'Max atmospering speed of the starship'
		},
		crew: {
			type: GraphQLString,
			description: 'Crew of the starship'
		},
		passengers: {
			type: GraphQLString,
			description: 'Passengers of the starship'
		},
		cargo_capacity: {
			type: GraphQLString,
			description: 'Cargo capacity of the starship'
		},
		consumables: {
			type: GraphQLString,
			description: 'Consumables of the starship'
		},
		hyperdrive_rating: {
			type: GraphQLString,
			description: 'Hyperdrive rating of the starship'
		},
		MGLT: {
			type: GraphQLString,
			description: 'MGLT of the starship'
		},
		starship_class: {
			type: GraphQLString,
			description: 'Starship class'
		},
		pilots: getPeople({ key: 'pilots' }),
		films: getFilms(),
		created: {
			type: GraphQLString,
			description: 'Created date of the starship'
		},
		edited: {
			type: GraphQLString,
			description: 'Edited date of the starship'
		},
		url: {
			type: GraphQLString,
			description: 'Url of the starship'
		}
	})
});

module.exports = StarshipsType;
