const FilmType = require('../schema/Film');
const {
	GraphQLInt,
	GraphQLList
} = require('graphql');

const getAllFilm = {
	type: new GraphQLList(FilmType),
	args: {
		page: {
			type: GraphQLInt,
			description: 'Page number'
		},
		limit: {
			type: GraphQLInt,
			description: 'Count of result'
		},
		offset: {
			type: GraphQLInt,
			description: 'Offset for the research'
		}
	},
	resolve: async (_source, { page, limit, offset }, { dataSources }) => {
		return dataSources.swAPI.getAllFilm({ page, limit, offset }).then(response => response.results);
	}
};

module.exports = getAllFilm;
