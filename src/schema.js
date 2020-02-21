const {
	GraphQLObjectType,
	GraphQLSchema
} = require('graphql');
const getPeople = require('./queries/get-people');
const getAllPeople = require('./queries/get-all-people');
const getFilms = require('./queries/get-films');
const getPlanet = require('./queries/get-planet');
const getSpecie = require('./queries/get-specie');

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			getPeople,
			getAllPeople,
			getFilms,
			getPlanet,
			getSpecie
		}
	})
});

module.exports = schema;
