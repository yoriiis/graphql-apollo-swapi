const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
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

module.exports = FilmType;
