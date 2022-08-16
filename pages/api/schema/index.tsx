import { gql } from 'apollo-server-micro';

export const typeDefs = gql(`
    type  User {
        id: ID
        login: String
        avatar_url: String
        url: String
    }
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
    type Query {
        getRepo(id: ID!) : Repository!
        getRepos : [Repository]
        getUser(name: String): User!
    }
`);
