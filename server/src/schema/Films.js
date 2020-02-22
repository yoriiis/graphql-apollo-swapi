const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
} = require('graphql');

const FilmsType = new GraphQLObjectType({
	name: 'Films',
	fields: () => ({
		title: {
			type: GraphQLString,
			description: 'Title of the film'
		},
		episode_id: {
			type: GraphQLInt,
			description: 'Id of the film episode'
		},
		opening_crawl: {
			type: GraphQLString,
			description: 'Synopsis of the film'
		},
		director: {
			type: GraphQLString,
			description: 'Director of the film'
		},
		producer: {
			type: GraphQLString,
			description: 'Producer of the film'
		},
		release_date: {
			type: GraphQLString,
			description: 'Release date of the film'
		},
		created: {
			type: GraphQLString,
			description: 'Created date of the film'
		},
		edited: {
			type: GraphQLString,
			description: 'Edited date of the film'
		},
		url: {
			type: GraphQLString,
			description: 'Url of the film'
		}
	})
});

module.exports = FilmsType;
