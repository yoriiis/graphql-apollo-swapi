const {
	GraphQLObjectType,
	GraphQLSchema
} = require('graphql');
const getAllPeople = require('./queries/get-all-people');
const getAllPlanet = require('./queries/get-all-planet');
const getAllStarship = require('./queries/get-all-starship');
const getAllVehicles = require('./queries/get-all-vehicles');
const getAllSpecie = require('./queries/get-all-specie');
const getAllFilm = require('./queries/get-all-film');
const getPeople = require('./queries/get-people');
const getPlanet = require('./queries/get-planet');
const getStarship = require('./queries/get-starship');
const getVehicles = require('./queries/get-vehicles');
const getSpecie = require('./queries/get-specie');
const getFilm = require('./queries/get-films');

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			getAllPeople,
			getAllPlanet,
			getAllStarship,
			getAllVehicles,
			getAllSpecie,
			getAllFilm,
			getPeople,
			getPlanet,
			getStarship,
			getVehicles,
			getSpecie,
			getFilm
		}
	})
});

module.exports = schema;
