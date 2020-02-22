const FilmType = require('./Films');
const PeopleType = require('./People');
const { createPromisesFromUrls } = require('../functions');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} = require('graphql');

const VehiclesType = new GraphQLObjectType({
	name: 'Vehicles',
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
		vehicle_class: { type: GraphQLString },
		pilots: {
			type: GraphQLList(PeopleType),
			resolve (_source, _args, { dataSources }) {
				return createPromisesFromUrls({
					key: 'people',
					urls: _source.pilots,
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

module.exports = VehiclesType;
