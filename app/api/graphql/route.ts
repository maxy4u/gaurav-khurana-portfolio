import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { NextRequest } from 'next/server';
import { resolvers } from '../../../resolvers';
// import allowCors from '../../../utils/cors';

const typeDefs = gql(`
  scalar Date
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
        id: Int
        title: String
        company: String
        start: Date
        end: Date
        desc: String
        skills: String
        published: Boolean
        role: [Roles]
        author:    User
        authorId:  Int
    }
    type Roles {
        id:     ID
        exp:     Experience
        expid:   Int
        content: String
        createdAt:  Date
        updatedAt: Date
    }
    
    type User {
      id:   ID
      email: String
      name: String
      pwd:  String
      exp:  [Experience]
    }
    type Resume{
        resume: [Experience]
    }
    type Query {
        getRepo(id: ID!) : Repository!
        getRepos : [Repository]
        getUser(name: String): User
        getResume: Resume
        getUserExperience(email: String, pwd: String) : [User]
    }
`);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer);
//export default allowCors(handler); use this only in dev when testing "http://localhost:3000/api/graphql"

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
