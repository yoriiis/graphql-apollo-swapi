
const FilmType = require('../schema/Film');
const {
	GraphQLInt
} = require('graphql');

const getFilm = {
	type: FilmType,
	args: {
		id: {
			type: GraphQLInt,
			description: 'Id of the film'
		}
	},
	resolve: async (_source, { id }, { dataSources }) => {
		return dataSources.swAPI.getFilm(id);
	}
};

module.exports = getFilm;
