const {
	GraphQLInt,
	GraphQLList
} = require('graphql');

/**
 * Query definition to get all results from category
 *
 * @param {String} catgory Category name
 *
 * @return {Object} Object definition for the query
 */
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
				description: 'Limit of result (0 equal no limit)'
			},
			offset: {
				type: GraphQLInt,
				description: 'Offset index for the research'
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
