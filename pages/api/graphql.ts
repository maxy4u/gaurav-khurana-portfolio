import { ApolloServer, gql } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { resolvers } from './resolvers';

export const typeDefs = gql(`
  scalar DateTime
    type Owner {
        avatar_url : String
        login: String
    }
    type Repository {
        id: ID
        name: String
        owner: Owner
        url: String
        description: String
    }
    type Experience {
        id: Int!
        title: String
        company: String
        start: DateTime
        end: DateTime
        desc: String
        skills: String
        published: Boolean
        roles: [String]
        author:    User
        authorId:  Int
    }
    type Roles {
        id:     ID!
        exp:     Experience!
        expid:   Int
        content: String
        createdAt:  DateTime  
        updatedAt: DateTime
    }
    
    type User {
      id:   ID!
      email: String
      name: String
      pwd:  String
      exp:  [Experience]
      login: String
      avatar_url: String
      url: String
    }
    type Resume{
        resume: [Experience!]!
    }
    type Query {
        getRepo(id: ID!) : Repository!
        getRepos : [Repository]
        getUser(name: String): User!
        getResume: Resume
    }
`);

const cors = Cors();
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false
  }
};
