const getPeople = require('../fields/People');
const getFilms = require('../fields/Films');
const getHomeworld = require('../fields/Homeworld');
const {
	GraphQLObjectType,
	GraphQLString
} = require('graphql');

const SpeciesType = new GraphQLObjectType({
	name: 'Species',
	fields: () => ({
		name: {
			type: GraphQLString,
			description: 'Name of the specie'
		},
		classification: {
			type: GraphQLString,
			description: 'Classification of the specie'
		},
		designation: {
			type: GraphQLString,
			description: 'Designation of the specie'
		},
		average_height: {
			type: GraphQLString,
			description: 'Average height of the specie'
		},
		skin_colors: {
			type: GraphQLString,
			description: 'Skin color of the specie'
		},
		hair_colors: {
			type: GraphQLString,
			description: 'Hair color of the specie'
		},
		eye_colors: {
			type: GraphQLString,
			description: 'Eye color of the specie'
		},
		average_lifespan: {
			type: GraphQLString,
			description: 'Average lifespan of the specie'
		},
		homeworld: getHomeworld(),
		language: {
			type: GraphQLString,
			description: 'Language of the specie'
		},
		people: getPeople({ key: 'people' }),
		films: getFilms(),
		created: {
			type: GraphQLString,
			description: 'Created date of the specie'
		},
		edited: {
			type: GraphQLString,
			description: 'Edited date of the specie'
		},
		url: {
			type: GraphQLString,
			description: 'Url of the specie'
		}
	})
});

module.exports = SpeciesType;
