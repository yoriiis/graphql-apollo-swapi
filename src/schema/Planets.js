const FilmType = require('./Films');
const { createPromisesFromUrls } = require('../functions');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} = require('graphql');

const PlanetsType = new GraphQLObjectType({
	name: 'Planets',
	fields: () => ({
		name: { type: GraphQLString },
		rotation_period: { type: GraphQLString },
		orbital_period: { type: GraphQLString },
		diameter: { type: GraphQLString },
		climate: { type: GraphQLString },
		gravity: { type: GraphQLString },
		terrain: { type: GraphQLString },
		surface_water: { type: GraphQLString },
		population: { type: GraphQLString },
		residents: {
			type: GraphQLList(require('./People')),
			resolve (_source, _args, { dataSources }) {
				return createPromisesFromUrls({
					key: 'people',
					urls: _source.residents,
					method: dataSources.swAPI.getCategory.bind(dataSources.swAPI)
				});
			}
		},
		films: {
			type: GraphQLList(FilmType),
			resolve (_source, _args, { dataSources }) {
				return createPromisesFromUrls({
					key: 'films',
					urls: _source.films,
					method: dataSources.swAPI.getCategory.bind(dataSources.swAPI)
				});
			}
		},
		created: { type: GraphQLString },
		edited: { type: GraphQLString },
		url: { type: GraphQLString }
	})
});

module.exports = PlanetsType;
