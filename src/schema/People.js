const FilmType = require('./Films');
const PlanetType = require('./Planets');
const { getIdFromUrl, createPromisesFromUrls } = require('../functions');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} = require('graphql');

const PeopleType = new GraphQLObjectType({
	name: 'People',
	fields: () => ({
		name: { type: GraphQLString },
		height: { type: GraphQLString },
		mass: { type: GraphQLString },
		hair_color: { type: GraphQLString },
		skin_color: { type: GraphQLString },
		eye_color: { type: GraphQLString },
		birth_year: { type: GraphQLString },
		gender: { type: GraphQLString },
		homeworld: {
			type: PlanetType,
			resolve (_source, _args, { dataSources }) {
				const planetId = getIdFromUrl(_source.homeworld);
				return dataSources.swAPI.getCategory({ key: 'planets', id: planetId });
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
		species: {
			type: GraphQLList(require('./Species')),
			resolve (_source, _args, { dataSources }) {
				return createPromisesFromUrls({
					key: 'species',
					urls: _source.species,
					method: dataSources.swAPI.getCategory.bind(dataSources.swAPI)
				});
			}
		},
		starships: {
			type: GraphQLList(require('./Starships')),
			resolve (_source, _args, { dataSources }) {
				return createPromisesFromUrls({
					key: 'starships',
					urls: _source.starships,
					method: dataSources.swAPI.getCategory.bind(dataSources.swAPI)
				});
			}
		}
	})
});

module.exports = PeopleType;
