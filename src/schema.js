const {
	GraphQLObjectType,
	GraphQLSchema
} = require('graphql');
const getPeople = require('./queries/get-people');
const getAllPeople = require('./queries/get-all-people');
const getFilm = require('./queries/get-films');
const getPlanet = require('./queries/get-planet');
const getSpecie = require('./queries/get-specie');
const getAllSpecie = require('./queries/get-all-specie');
const getStarship = require('./queries/get-starship');
const getVehicles = require('./queries/get-vehicles');

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			getPeople,
			getAllPeople,
			getFilm,
			getPlanet,
			getSpecie,
			getAllSpecie,
			getStarship,
			getVehicles
		}
	})
});

module.exports = schema;
