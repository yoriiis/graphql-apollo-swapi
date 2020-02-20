const { ApolloServer } = require('apollo-server');

const schema = require('./schema');
const SwAPI = require('./datasources/swapi');

const server = new ApolloServer({
	schema: schema,
	dataSources: () => {
		return {
			swAPI: new SwAPI()
		};
	}
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
