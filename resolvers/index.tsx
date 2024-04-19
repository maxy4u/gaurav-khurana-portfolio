import axios from 'axios';
import { Repository } from '../utils';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import prisma from 'lib/prisma';

export const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value as string); // value from the client
    },
    serialize(value) {
      return (value as Date)?.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value); // ast value is always in string format
      }
      return null;
    }
  }),
  Query: {
    getRepos: async () => {
      try {
        const { data } = await axios.get('https://api.github.com/users/maxy4u/repos?per_page=100');
        return (data as Repository[]).map(({ id, name, owner, url, description }) => ({
          id,
          name,
          owner: {
            login: owner?.login,
            avatar_url: owner?.avatar_url
          },
          url: url?.replace(/(api\.|repos\/)/g, ''),
          description
        }));
      } catch (e) {
        throw e;
      }
    },
    getRepo: async (id: number) => {
      try {
        const repos: Repository[] = await axios.get('https://api.github.com/users/maxy4u/repos');
        return repos
          .map(({ id, name, owner, url, description }) => ({
            id,
            name,
            owner: {
              login: owner?.login,
              avatar_url: owner?.avatar_url
            },
            url,
            description
          }))
          .filter((repo) => Number(repo.id) === id);
      } catch (e) {
        throw e;
      }
    },
    getUser: async (_: unknown, { name }: { name: string }) => {
      try {
        const user = await axios.get(`https://api.github.com/users/${name}`);
        return {
          id: user.data.id,
          login: user.data.login,
          avatar_url: user.data.avatar_url,
          url: user.data.url
        };
      } catch (error) {
        throw error;
      }
    },
    getUserExperience: async (_: unknown, { email, pwd }: { email: string; pwd: string }) => {
      try {
        const result = await prisma.user.findMany({
          where: { email: email, pwd: pwd },
          select: {
            name: true,
            exp: true,
            id: true
          }
        });
        return result;
      } catch (error) {
        throw error;
      }
    }
  }
};
