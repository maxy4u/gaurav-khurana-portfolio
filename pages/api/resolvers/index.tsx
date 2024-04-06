import axios from 'axios';
import { Repository } from '../../../utils';
import { GraphQLDateTime } from 'graphql-iso-date';

export const resolvers = {
  DateTime: GraphQLDateTime,
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
    }
  }
};
