import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `${process.env.host || ''}/api/graphql`,
  cache: new InMemoryCache()
});

export default client;
