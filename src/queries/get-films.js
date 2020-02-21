
const FilmType = require('../schema/Film');
const {
	GraphQLInt
} = require('graphql');

const getFilms = {
	type: FilmType,
	args: {
		id: {
			type: GraphQLInt,
			description: 'Id of the film'
		}
	},
	resolve: async (_source, { id }, { dataSources }) => {
		return dataSources.swAPI.getFilms(id);
	}
};

module.exports = getFilms;
