const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { HttpLink } = require('apollo-link-http');

const cache = new InMemoryCache();
const link = new HttpLink({
	uri: 'http://localhost:4000/',
	fetch: require('node-fetch')
});

const client = new ApolloClient({
	cache,
	link
});

client.query({
	query: require('./queries/People')
}).then(response => {
	// console.log(response);
	console.log(response.data.People.name);
});

client.query({
	query: require('./queries/Films')
}).then(response => {
	// console.log(response);
	console.log(response.data.Films.title);
});

client.query({
	query: require('./queries/Planets')
}).then(response => {
	// console.log(response);
	console.log(response.data.Planets.name);
});

client.query({
	query: require('./queries/Species')
}).then(response => {
	// console.log(response);
	console.log(response.data.Species.name);
});

client.query({
	query: require('./queries/Starships')
}).then(response => {
	// console.log(response);
	console.log(response.data.Starships.name);
});

client.query({
	query: require('./queries/Vehicles')
}).then(response => {
	// console.log(response);
	console.log(response.data.Vehicles.name);
});
