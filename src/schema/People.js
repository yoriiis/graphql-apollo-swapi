const FilmType = require('./Film');
const PlanetType = require('./Planet');
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
				return dataSources.swAPI.getPlanet({ id: planetId });
			}
		},
		films: {
			type: GraphQLList(FilmType),
			resolve (_source, _args, { dataSources }) {
				return createPromisesFromUrls({
					urls: _source.films,
					method: dataSources.swAPI.getFilm.bind(dataSources.swAPI)
				});
			}
		},
		species: {
			type: GraphQLList(require('./Specie')),
			resolve (_source, _args, { dataSources }) {
				return createPromisesFromUrls({
					urls: _source.species,
					method: dataSources.swAPI.getSpecie.bind(dataSources.swAPI)
				});
			}
		},
		starships: {
			type: GraphQLList(require('./Specie')),
			resolve (_source, _args, { dataSources }) {
				return createPromisesFromUrls({
					urls: _source.starships,
					method: dataSources.swAPI.getStarship.bind(dataSources.swAPI)
				});
			}
		}
	})
});

module.exports = PeopleType;
