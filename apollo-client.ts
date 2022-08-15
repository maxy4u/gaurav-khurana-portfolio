import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api.github.com/users/maxy4u/repos',
    cache: new InMemoryCache()

});

export default client;