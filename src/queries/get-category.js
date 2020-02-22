const {
	GraphQLInt,
	GraphQLString
} = require('graphql');

module.exports = (category) => {
	return {
		type: require(`../schema/${category.name}`),
		args: {
			id: {
				type: GraphQLInt,
				description: `Id of the ${category.name.toLowerCase()}`
			},
			name: {
				type: GraphQLString,
				description: `Name of the ${category.name.toLowerCase()}`
			}
		},
		resolve: async (_source, { id, name }, { dataSources }) => {
			const isSearch = typeof name !== 'undefined' && typeof id === 'undefined';
			return dataSources.swAPI.getCategory({
				key: category.name.toLowerCase(),
				id,
				name
			}).then(response => {
				return isSearch ? response.results[0] : response;
			});
		}
	};
};
