const FilmType = require('./Film');
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
				const promises = _source.films.map(async film => {
					const filmIdSplit = film.split('/films/');
					const filmId = parseInt(filmIdSplit[filmIdSplit.length - 1]);
					return dataSources.swAPI.getFilmsByPeople(filmId);
				});
				return Promise.all(promises);
			}
		}
	})
});

module.exports = PeopleType;
