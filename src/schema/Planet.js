const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} = require('graphql');

const PlanetType = new GraphQLObjectType({
	name: 'Planet',
	fields: () => ({
		name: { type: GraphQLString },
		rotation_period: { type: GraphQLString },
		orbital_period: { type: GraphQLString },
		diameter: { type: GraphQLString },
		climate: { type: GraphQLString },
		gravity: { type: GraphQLString },
		terrain: { type: GraphQLString },
		surface_water: { type: GraphQLString },
		population: { type: GraphQLString },
		residents: { type: new GraphQLList(GraphQLString) },
		films: { type: new GraphQLList(GraphQLString) },
		created: { type: GraphQLString },
		edited: { type: GraphQLString },
		url: { type: GraphQLString }
	})
});

module.exports = PlanetType;
