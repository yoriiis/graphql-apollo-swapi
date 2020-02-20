const {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLSchema
} = require('graphql');
const FilmType = require('./schema/Film');
const PeopleType = require('./schema/People');

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			getPeople: {
				type: PeopleType,
				args: {
					id: { type: GraphQLInt }
				},
				resolve: async (_source, { id }, { dataSources }) => {
					return dataSources.swAPI.getPeople(id);
				}
			},
			getFilms: {
				type: FilmType,
				args: {
					id: { type: GraphQLInt }
				},
				resolve: async (_source, { id }, { dataSources }) => {
					return dataSources.swAPI.getFilms(id);
				}
			}
		}
	})
});

module.exports = schema;
