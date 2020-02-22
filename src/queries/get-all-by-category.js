const {
	GraphQLInt,
	GraphQLList
} = require('graphql');

module.exports = (category) => {
	return {
		type: new GraphQLList(require(`../schema/${category.name}`)),
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
			return dataSources.swAPI.getAllByCategory({
				key: category.name.toLowerCase(),
				page,
				limit,
				offset
			}).then(response => response.results);
		}
	};
};
