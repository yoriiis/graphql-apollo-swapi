const getPeople = require('../fields/People');
const getFilms = require('../fields/Films');
const {
	GraphQLObjectType,
	GraphQLString
} = require('graphql');

const PlanetsType = new GraphQLObjectType({
	name: 'Planets',
	fields: () => ({
		name: {
			type: GraphQLString,
			description: 'Name of the planet'
		},
		rotation_period: {
			type: GraphQLString,
			description: 'Rotation period of the planet'
		},
		orbital_period: {
			type: GraphQLString,
			description: 'Orbital period of the planet'
		},
		diameter: {
			type: GraphQLString,
			description: 'Diameter of the planet'
		},
		climate: {
			type: GraphQLString,
			description: 'Climate of the planet'
		},
		gravity: {
			type: GraphQLString,
			description: 'Gravity of the planet'
		},
		terrain: {
			type: GraphQLString,
			description: 'Terrain of the planet'
		},
		surface_water: {
			type: GraphQLString,
			description: 'Surface water of the planet'
		},
		population: {
			type: GraphQLString,
			description: 'Population of the planet'
		},
		residents: getPeople({ key: 'residents' }),
		films: getFilms(),
		created: {
			type: GraphQLString,
			description: 'Created date of the planet'
		},
		edited: {
			type: GraphQLString,
			description: 'Edited date of the planet'
		},
		url: {
			type: GraphQLString,
			description: 'Url of the planet'
		}
	})
});

module.exports = PlanetsType;
