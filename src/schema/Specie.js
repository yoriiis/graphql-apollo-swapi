const FilmType = require('./Film');
const PeopleType = require('./People');
const { createPromisesFromUrls } = require('../functions');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} = require('graphql');

const SpecieType = new GraphQLObjectType({
	name: 'Specie',
	fields: () => ({
		name: { type: GraphQLString },
		classification: { type: GraphQLString },
		designation: { type: GraphQLString },
		average_height: { type: GraphQLString },
		skin_colors: { type: GraphQLString },
		hair_colors: { type: GraphQLString },
		eye_colors: { type: GraphQLString },
		average_lifespan: { type: GraphQLString },
		homeworld: { type: GraphQLString },
		language: { type: GraphQLString },
		people: {
			type: GraphQLList(PeopleType),
			resolve (_source, _args, { dataSources }) {
				return createPromisesFromUrls({
					urls: _source.people,
					method: dataSources.swAPI.getPeople.bind(dataSources.swAPI)
				});
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
		created: { type: GraphQLString },
		edited: { type: GraphQLString },
		url: { type: GraphQLString }
	})
});

module.exports = SpecieType;
