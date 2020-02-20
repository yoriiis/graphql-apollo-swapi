const fetch = require('node-fetch');
const {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLSchema,
	GraphQLList
} = require('graphql');

const FilmType = new GraphQLObjectType({
	name: 'Films',
	fields: () => ({
		title: { type: GraphQLString },
		episode_id: { type: GraphQLInt },
		opening_crawl: { type: GraphQLString },
		director: { type: GraphQLString },
		producer: { type: GraphQLString },
		release_date: { type: GraphQLString }
	})
});

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
			type: new GraphQLList(GraphQLString)
		}
	})
});

const schema = new GraphQLSchema({
	People: {
		films: parent => {
			const promises = parent.films.map(async url => {
				const response = await fetch(url);
				return response.json();
			});
			return Promise.all(promises);
		}
	},
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
