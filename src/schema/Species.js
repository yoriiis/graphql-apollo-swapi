const FilmType = require('./Films');
const PeopleType = require('./People');
const PlanetType = require('./Planets');
const { getIdFromUrl, createPromisesFromUrls } = require('../functions');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} = require('graphql');

const SpeciesType = new GraphQLObjectType({
	name: 'Species',
	fields: () => ({
		name: { type: GraphQLString },
		classification: { type: GraphQLString },
		designation: { type: GraphQLString },
		average_height: { type: GraphQLString },
		skin_colors: { type: GraphQLString },
		hair_colors: { type: GraphQLString },
		eye_colors: { type: GraphQLString },
		average_lifespan: { type: GraphQLString },
		homeworld: {
			type: PlanetType,
			resolve (_source, _args, { dataSources }) {
				const planetId = getIdFromUrl(_source.homeworld);
				return dataSources.swAPI.getCategory({ key: 'planets', id: planetId });
			}
		},
		language: { type: GraphQLString },
		people: {
			type: GraphQLList(PeopleType),
			resolve (_source, _args, { dataSources }) {
				return createPromisesFromUrls({
					key: 'people',
					urls: _source.people,
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

module.exports = SpeciesType;
