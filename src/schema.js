const {
	GraphQLObjectType,
	GraphQLSchema
} = require('graphql');

const getAllByCategory = require('./queries/get-all-by-category');
const getCategory = require('./queries/get-category');
const categories = [{
	name: 'People'
}, {
	name: 'Planets'
}, {
	name: 'Starships'
}, {
	name: 'Vehicles'
}, {
	name: 'Species'
}, {
	name: 'Films'
}];
const fields = {};

categories.forEach(category => {
	fields[`getAll${category.name}`] = getAllByCategory(category);
	fields[category.name] = getCategory(category);
});

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: fields
	})
});

module.exports = schema;
