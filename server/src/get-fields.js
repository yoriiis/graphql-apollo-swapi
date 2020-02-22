const { getIdFromUrl, createPromisesFromUrls } = require('./utils');
const { GraphQLList } = require('graphql');

/**
 * Get homeworld
 *
 * @return {Object} Schema definition object type
 */
const getHomeworld = () => {
	return {
		type: require('./schema/Planets'),
		description: 'Homeworld of the person',
		resolve (_source, _args, { dataSources }) {
			const planetId = getIdFromUrl(_source.homeworld);
			return dataSources.swAPI.getCategory({ key: 'planets', id: planetId });
		}
	};
};

/**
 * Get films
 *
 * @return {Object} Schema definition object type
 */
const getFilms = () => {
	return {
		type: GraphQLList(require('./schema/Films')),
		description: 'Films of the person',
		resolve (_source, _args, { dataSources }) {
			return createPromisesFromUrls({
				key: 'films',
				urls: _source.films,
				method: dataSources.swAPI.getCategory.bind(dataSources.swAPI)
			});
		}
	};
};

/**
 * Get species
 *
 * @return {Object} Schema definition object type
 */
const getSpecies = () => {
	return {
		type: GraphQLList(require('./schema/Species')),
		description: 'Specie of the person',
		resolve (_source, _args, { dataSources }) {
			return createPromisesFromUrls({
				key: 'species',
				urls: _source.species,
				method: dataSources.swAPI.getCategory.bind(dataSources.swAPI)
			});
		}
	};
};

/**
 * Get starships
 *
 * @return {Object} Schema definition object type
 */
const getStarships = () => {
	return {
		type: GraphQLList(require('./schema/Starships')),
		description: 'Starships of the person',
		resolve (_source, _args, { dataSources }) {
			return createPromisesFromUrls({
				key: 'starships',
				urls: _source.starships,
				method: dataSources.swAPI.getCategory.bind(dataSources.swAPI)
			});
		}
	};
};

/**
 * Get people
 *
 * @param {String} key Object key from the category
 * (planets.residents, species.people, starships.pilots, vehicles.pilots)
 *
 * @return {Object} Schema definition object type
 */
const getPeople = ({ key }) => {
	return {
		type: GraphQLList(require('./schema/People')),
		description: 'People',
		resolve (_source, _args, { dataSources }) {
			return createPromisesFromUrls({
				key: 'people',
				urls: _source[key],
				method: dataSources.swAPI.getCategory.bind(dataSources.swAPI)
			});
		}
	};
};

module.exports = {
	getHomeworld,
	getFilms,
	getSpecies,
	getStarships,
	getPeople
};
