const FilmType = require('./Film');
const PeopleType = require('./People');
const { createPromisesFromUrls } = require('../functions');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} = require('graphql');

const StarshipType = new GraphQLObjectType({
	name: 'Starship',
	fields: () => ({
		name: { type: GraphQLString },
		model: { type: GraphQLString },
		manufacturer: { type: GraphQLString },
		cost_in_credits: { type: GraphQLString },
		length: { type: GraphQLString },
		max_atmosphering_speed: { type: GraphQLString },
		crew: { type: GraphQLString },
		passengers: { type: GraphQLString },
		cargo_capacity: { type: GraphQLString },
		consumables: { type: GraphQLString },
		hyperdrive_rating: { type: GraphQLString },
		MGLT: { type: GraphQLString },
		starship_class: { type: GraphQLString },
		pilots: {
			type: GraphQLList(PeopleType),
			resolve (_source, _args, { dataSources }) {
				return createPromisesFromUrls({
					urls: _source.pilots,
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

module.exports = StarshipType;
