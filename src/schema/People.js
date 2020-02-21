const FilmType = require('./Film');
const { createPromisesFromUrls } = require('../functions');
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
		homeworld: { type: GraphQLString },
		films: {
			type: new GraphQLList(FilmType),
			resolve (_source, _args, { dataSources }) {
				return createPromisesFromUrls({
					urls: _source.films,
					method: dataSources.swAPI.getFilms.bind(dataSources.swAPI)
				});
			}
		}
	})
});

module.exports = PeopleType;
