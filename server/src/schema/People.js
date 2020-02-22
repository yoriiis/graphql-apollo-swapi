const getHomeworld = require('../fields/Homeworld');
const getFilms = require('../fields/Films');
const getSpecies = require('../fields/Species');
const getStarships = require('../fields/Starships');
const {
	GraphQLObjectType,
	GraphQLString
} = require('graphql');

const PeopleType = new GraphQLObjectType({
	name: 'People',
	fields: () => ({
		name: {
			type: GraphQLString,
			description: 'Name of the person'
		},
		height: {
			type: GraphQLString,
			description: 'Height of the person'
		},
		mass: {
			type: GraphQLString,
			description: 'Mass of the person'
		},
		hair_color: {
			type: GraphQLString,
			description: 'Hair color of the person'
		},
		skin_color: {
			type: GraphQLString,
			description: 'Skin color of the person'
		},
		eye_color: {
			type: GraphQLString,
			description: 'Eye color of the person'
		},
		birth_year: {
			type: GraphQLString,
			description: 'Birth year of the person'
		},
		gender: {
			type: GraphQLString,
			description: 'Gender of the person'
		},
		homeworld: getHomeworld(),
		films: getFilms(),
		species: getSpecies(),
		starships: getStarships(),
		created: {
			type: GraphQLString,
			description: 'Created date of the Person'
		},
		edited: {
			type: GraphQLString,
			description: 'Edited date of the Person'
		},
		url: {
			type: GraphQLString,
			description: 'Url of the Person'
		}
	})
});

module.exports = PeopleType;
