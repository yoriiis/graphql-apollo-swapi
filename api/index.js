const { ApolloServer } = require('apollo-server');

const schema = require('../server/src/schema');
const SwAPI = require('../server/src/datasources/swapi');

const isProduction = process.env.NODE_ENV === 'production';

const server = new ApolloServer({
	schema: schema,
	introspection: true,
	playground: true,
	dataSources: () => {
		return {
			swAPI: new SwAPI()
		};
	}
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
